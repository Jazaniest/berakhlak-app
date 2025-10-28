export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-blue-100 to-indigo-200 text-gray-800">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-indigo-600">
          Hello, React + Tailwind!
        </h1>
        <p className="text-lg mb-6">
          Ini adalah halaman React sederhana yang menggunakan TailwindCSS ✨
        </p>
        <button className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition duration-300">
          Klik Aku
        </button>
      </div>
    </div>
  );
}
