import { Router } from 'express';
import {
  listProductsCtrl,
  getProductCtrl,
  createProductCtrl,
  updateProductCtrl,
  deleteProductCtrl,
  findProductCtrl,
} from '../controllers/products.controller.js';
import { requireAuth } from '../middlewares/auth.js';

const r = Router();

// Public Routes
r.get('/', listProductsCtrl);
r.get('/:id', getProductCtrl);
r.post('/find', findProductCtrl);

// Protected Routes
r.post('/add-product', requireAuth, createProductCtrl);
r.patch('/:id', requireAuth, updateProductCtrl);
r.delete('/:id', requireAuth, deleteProductCtrl);

export default r;
