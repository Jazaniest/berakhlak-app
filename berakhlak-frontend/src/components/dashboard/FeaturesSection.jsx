import { BarChart3, Users, Shield } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <BarChart3 size={40} />,
      title: 'Dashboard Analitik',
      desc: 'Visualisasi data kinerja yang mudah dipahami dan komprehensif'
    },
    {
      icon: <Users size={40} />,
      title: 'Penilaian 360 Derajat',
      desc: 'Penilaian dari atasan, rekan kerja, dan bawahan untuk hasil objektif'
    },
    {
      icon: <Shield size={40} />,
      title: 'Keamanan Data',
      desc: 'Sistem keamanan berlapis untuk melindungi data penilaian'
    }
  ];

  return (
    <section id="fitur" className="py-16 bg-linear-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Fitur Unggulan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform lengkap untuk mendukung penilaian kinerja yang efektif dan transparan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-900 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}