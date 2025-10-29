import { CheckCircle } from 'lucide-react';

export default function HeroSection({ onLoginClick }) {
  return (
    <section id="beranda" className="pt-24 pb-16 bg-linear-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-blue-900 mb-6">
              Sistem Penilaian Kinerja BERAKHLAK
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Platform digital untuk menilai dan mengembangkan budaya kerja ASN yang berorientasi pada pelayanan, akuntabilitas, dan kompeten.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={onLoginClick}
                className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition text-lg font-semibold"
              >
                Mulai Sekarang
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-900 hover:text-white transition text-lg font-semibold">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-900 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="font-semibold text-gray-800">Berorientasi Pelayanan</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{width: '92%'}}></div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="text-blue-500" size={24} />
                  <span className="font-semibold text-gray-800">Akuntabel</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{width: '88%'}}></div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="text-purple-500" size={24} />
                  <span className="font-semibold text-gray-800">Kompeten</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}