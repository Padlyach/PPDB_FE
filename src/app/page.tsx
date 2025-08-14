import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/sekolah.webp"
          alt="Background Hero"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Overlay Putih */}
        <div className="absolute inset-0 bg-white opacity-50 z-10"></div>

        {/* Konten Hero */}
        <div className="max-w-6xl mx-auto text-center space-y-5 relative z-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#00215E] to-[#FAA300] hover:from-[#FAA300] hover:to-[#00215E] transition-all duration-300">
            SELAMAT DATANG DI SMK INFORMATIKA PESAT
          </h2>

          <p className="text-lg sm:text-xl text-[#00215E] font-bold">
            Sistem Informasi Pendaftaran Siswa Baru (PPDB)
          </p>

          <p className="text-base sm:text-lg md:text-xl text-[#00215E]">
            Membentuk Generasi Unggul dalam Teknologi dan Karakter
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/portal-ppdb/link-pendaftaran">
              <button className="bg-gradient-to-r from-[#00215E] to-[#FAA300] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Daftar Sekarang
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tentang Sekolah */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left text-[#00215E]">
                Tentang SMK Informatika Pesat
              </h3>
              <div className="w-16 h-1 bg-[#00215E] mx-auto md:mx-0"></div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                SMK Informatika Pesat adalah lembaga pendidikan kejuruan unggulan yang berfokus pada pengembangan kompetensi di bidang teknologi informasi. Dengan pengalaman lebih dari 15 tahun, kami telah meluluskan ribuan siswa yang kini berkarir sukses di berbagai perusahaan teknologi terkemuka.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#00215E]">1500+</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Alumni Sukses</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-2xl sm:text-3xl font-bold text-[#00215E]">50+</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Mitra Industri</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="https://smkpesat.sch.id/" target="_blank">
                  <button className="bg-gradient-to-r from-[#00215E] to-[#FAA300] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Website SMK
                  </button>
                </Link>
              </div>  
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
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

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya%20tentang%20PPDB"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
      >
        <Image
          src="/whatsapp-logo.png"
          alt="Chat via WhatsApp"
          width={50}
          height={50}
          className="rounded-full"
        />
      </a>
    </div>
  );
}
