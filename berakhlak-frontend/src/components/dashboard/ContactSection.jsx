import { useState } from 'react';

export default function ContactSection() {
  const [email, setEmail] = useState('');

  const handleContact = () => {
    if (email) {
      alert(`Terima kasih! Kami akan menghubungi ${email} segera.`);
      setEmail('');
    }
  };

  return (
    <section id="kontak" className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Siap Meningkatkan Kinerja?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Hubungi kami untuk informasi lebih lanjut atau demo sistem
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Email Anda" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-3 rounded-lg text-gray-900 w-full sm:w-80"
          />
          <button 
            onClick={handleContact}
            className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}