export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BERAKHLAK</h3>
            <p className="text-gray-400">
              Sistem Penilaian Kinerja untuk ASN yang lebih baik
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#beranda" className="hover:text-white transition">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-white transition">Tentang</a></li>
              <li><a href="#fitur" className="hover:text-white transition">Fitur</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@berakhlak.go.id</li>
              <li>Telepon: (021) 1234-5678</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BERAKHLAK. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}