import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white py-26 px-6 overflow-hidden h-screen">
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="max-w-6xl mx-auto text-center space-y-8 relative mt-37">
          <h2 className="text-6xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00215E] to-[#FAA300] hover:from-[#FAA300] hover:to-[#00215E] transition-all duration-300">
            SELAMAT DATANG DI SMK INFORMATIKA PESAT
          </h2>

          <p className="text-xl md:text-xl text-[#00215E] mt-5 mx-auto font-bold">
            Sistem Informasi Pendaftaran Siswa Baru (PPDB)
          </p>

          <p className="text-lg md:text-xl text-[#00215E] mx-auto">
            Membentuk Generasi Unggul dalam Teknologi dan Karakter
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#00215E] to-[#FAA300] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Tentang Sekolah */}
      <section className="py-20 px-6 bg-gray-100 h-screen">
        <div className="max-w-6xl mx-auto mt-50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-center text-[#00215E] mb-12">Tentang SMK Informatika Pesat</h3>
              <div className="w-20 h-1 bg-[#00215E]"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                SMK Informatika Pesat adalah lembaga pendidikan kejuruan unggulan yang berfokus pada pengembangan kompetensi di bidang teknologi informasi. Dengan pengalaman lebih dari 15 tahun, kami telah meluluskan ribuan siswa yang kini berkarir sukses di berbagai perusahaan teknologi terkemuka.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-3xl font-bold text-[#00215E]">1500+</h4>
                  <p className="text-gray-600">Alumni Sukses</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-3xl font-bold text-[#00215E]">50+</h4>
                  <p className="text-gray-600">Mitra Industri</p>
                </div>
              </div>  
              
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/sekolah.webp"
                alt="Gedung SMK PESAT"
                fill
                className="object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

    </div>)}