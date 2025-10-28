import axios from 'axios';
import * as cheerio from 'cheerio';
import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../repos/products.repo.js';
import { getFromHTML, getFromURLParams, resolveRedirects } from '../utils/productFinder.js'

function ensureString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

// --- Public ---
export async function listProductsCtrl(req, res, next) {
  try {
    const { page, pageSize, q } = req.query;
    const result = await listProducts({ page, pageSize, q: q?.toString() ?? '' });
    res.json(result);
  } catch (e) { next(e); }
}

export async function getProductCtrl(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ message: 'Invalid id' });
    const row = await getProductById(id);
    if (!row) return res.status(404).json({ message: 'Product not found' });
    res.json(row);
  } catch (e) { next(e); }
}

// --- Protected (requireAuth) ---
export async function createProductCtrl(req, res, next) {
  try {
    const { product_name, product_price, product_photo, product_link } = req.body ?? {};
    console.log('Received data:', { product_name, product_price, product_photo, product_link });  // Log data yang diterima

    if (
      !ensureString(product_name) ||
      !ensureString(product_price) ||
      !ensureString(product_photo) ||
      !ensureString(product_link)
    ) {
      return res.status(400).json({ message: 'All fields are required: product_name, product_price, product_photo, product_link' });
    }

    const created = await createProduct({ product_name, product_price, product_photo, product_link });
    res.status(201).json(created);
  } catch (e) { 
    next(e); 
  }
}


export async function updateProductCtrl(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ message: 'Invalid id' });

    const allowed = ['product_name', 'product_price', 'product_photo', 'product_link'];
    const patch = {};
    for (const k of allowed) {
      if (k in (req.body ?? {}) && ensureString(req.body[k])) patch[k] = req.body[k];
    }
    if (Object.keys(patch).length === 0) return res.status(400).json({ message: 'No valid fields to update' });

    const existing = await getProductById(id);
    if (!existing) return res.status(404).json({ message: 'Product not found' });

    const updated = await updateProduct(id, patch);
    res.json(updated);
  } catch (e) { next(e); }
}

export async function deleteProductCtrl(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ message: 'Invalid id' });

    const ok = await deleteProduct(id);
    if (!ok) return res.status(404).json({ message: 'Product not found' });
    res.json({ deleted: true });
  } catch (e) { next(e); }
}


// Fungsi untuk mengambil data dari halaman TikTok
const getProductDataFromTikTok = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Ambil title dan image dari meta tag atau elemen lain yang sesuai
    const title = $('meta[property="og:title"]').attr('content') || 'No title found';
    const image = $('meta[property="og:image"]').attr('content') || 'No image found';

    return { title, image };
  } catch (error) {
    console.error("Error fetching data from TikTok:", error);
    throw new Error('Failed to fetch data from TikTok');
  }
};

// Controller untuk route /find
export async function findProductCtrl(req, res, next) {
  const { link } = req.body;

  if (!link) {
    return res.status(400).json({ success: false, message: "Link tidak ditemukan." });
  }

  try {
    // Resolve redirects (to ensure the final URL is reached)
    const { finalUrl, html } = await resolveRedirects(link);
    
    // Ambil data title dan image menggunakan getFromURLParams atau getFromHTML
    const paramsData = getFromURLParams(finalUrl);  // Mengambil data dari URL params (seperti og_info)
    let title = paramsData.title;
    let image = paramsData.image;

    // Fallback jika tidak ditemukan dari params, ambil dari meta tags
    if (!title || !image) {
      const htmlData = getFromHTML(html, finalUrl);
      title = title || htmlData.title;
      image = image || htmlData.image;
    }

    // Kirimkan data produk yang ditemukan kembali ke frontend
    res.json({ success: true, title, image });
  } catch (error) {
    console.error("Error in findProductCtrl:", error);
    next(error);  // Tangani error dengan middleware
  }
}
