export default function AboutSection() {
  const values = [
    { letter: 'B', title: 'Berorientasi Pelayanan', desc: 'Memenuhi kebutuhan masyarakat dengan cepat dan tepat' },
    { letter: 'E', title: 'Akuntabel', desc: 'Bertanggung jawab atas kepercayaan yang diberikan' },
    { letter: 'R', title: 'Kompeten', desc: 'Meningkatkan kompetensi diri untuk hasil kerja berkualitas' },
    { letter: 'A', title: 'Harmonis', desc: 'Menghargai perbedaan dalam lingkungan kerja' },
    { letter: 'K', title: 'Loyal', desc: 'Berdedikasi dan mengutamakan kepentingan bangsa' },
    { letter: 'H', title: 'Adaptif', desc: 'Cepat menyesuaikan diri dengan perubahan' },
    { letter: 'L', title: 'Kolaboratif', desc: 'Membangun kerja sama yang sinergis' },
    { letter: 'A', title: 'Anti Korupsi', desc: 'Konsisten dengan nilai moral dan etika' },
    { letter: 'K', title: 'Komitmen', desc: 'Konsisten menjaga kepercayaan masyarakat' },
  ];

  return (
    <section id="tentang" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Tentang BERAKHLAK</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BERAKHLAK adalah Core Values ASN yang menjadi panduan perilaku dalam menjalankan tugas dan tanggung jawab sebagai pelayan publik.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition border-l-4 border-blue-900">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                  {value.letter}
                </div>
                <h3 className="text-lg font-bold text-blue-900">{value.title}</h3>
              </div>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}