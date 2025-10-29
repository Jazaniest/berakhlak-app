import { useState } from 'react';
import { X } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  if (!isOpen) return null;

  const handleLogin = () => {
    if (email && password) {
      alert('Login berhasil! Fitur akan diintegrasikan dengan backend.');
      onClose();
    } else {
      alert('Mohon isi email dan password');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Login</h2>
          <p className="text-gray-600">Masuk ke akun BERAKHLAK Anda</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
              placeholder="nama@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-700">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2" 
              />
              Ingat saya
            </label>
            <a href="#" className="text-blue-900 hover:underline">Lupa password?</a>
          </div>

          <button 
            onClick={handleLogin}
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold text-lg"
          >
            Masuk
          </button>

          <p className="text-center text-gray-600 text-sm">
            Belum punya akun? <a href="#" className="text-blue-900 font-semibold hover:underline">Daftar sekarang</a>
          </p>
        </div>
      </div>
    </div>
  );
}