import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';

export default function Navbar({ onLoginClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">BERAKHLAK</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="text-gray-700 hover:text-blue-900 transition">Beranda</a>
            <a href="#tentang" className="text-gray-700 hover:text-blue-900 transition">Tentang</a>
            <a href="#fitur" className="text-gray-700 hover:text-blue-900 transition">Fitur</a>
            <a href="#kontak" className="text-gray-700 hover:text-blue-900 transition">Kontak</a>
            <button 
              onClick={onLoginClick}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition flex items-center gap-2"
            >
              <LogIn size={18} />
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#beranda" className="block py-2 text-gray-700 hover:text-blue-900">Beranda</a>
            <a href="#tentang" className="block py-2 text-gray-700 hover:text-blue-900">Tentang</a>
            <a href="#fitur" className="block py-2 text-gray-700 hover:text-blue-900">Fitur</a>
            <a href="#kontak" className="block py-2 text-gray-700 hover:text-blue-900">Kontak</a>
            <button 
              onClick={onLoginClick}
              className="w-full mt-2 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2"
            >
              <LogIn size={18} />
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}