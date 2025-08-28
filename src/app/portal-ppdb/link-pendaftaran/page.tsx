import Link from "next/link";
import Image from "next/image";

export default function LinkPendaftaran() {
  return (
    <main className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fdfdfd] to-[#f3f6fb]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FAA300] to-[#FF8C00] tracking-tight drop-shadow-sm leading-tight">
            PENDAFTARAN
          </h2>
          <div className="mt-3 sm:mt-4 w-20 sm:w-28 lg:w-32 h-1 rounded-full bg-gradient-to-r from-[#FAA300] to-[#FF8C00]" />
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Portal resmi pendaftaran peserta didik baru Pesat School
          </p>
        </div>

        {/* Intro Section */}
         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:mb-20 items-center">
      <div className="w-full lg:w-1/2 order-2 lg:order-1">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-500">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-[#FAA300] to-[#FF8C00] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl sm:text-3xl">📋</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              Alur Pendaftaran Sekolah
            </h3>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
            Proses pendaftaran di{" "}
            <strong className="text-[#FAA300]">SMP, SMA, dan SMK Pesat</strong> telah disederhanakan untuk kemudahan Anda. 
            Ikuti langkah-langkah berikut untuk memulai perjalanan pendidikan terbaik bagi putra-putri Anda.
          </p>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
            Tim admission kami akan mendampingi setiap langkah proses pendaftaran hingga diterima. 
            Dapatkan pendidikan berkualitas dengan nilai-nilai Islami yang kuat!
          </p>

          {/* Step Process */}
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-4">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#FAA300] to-[#FF8C00] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm sm:text-base">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Pendaftaran Online</h4>
                <p className="text-sm sm:text-base text-gray-600">Daftar melalui website resmi sekolah</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#FAA300] to-[#FF8C00] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm sm:text-base">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Verifikasi Berkas</h4>
                <p className="text-sm sm:text-base text-gray-600">Upload dokumen yang diperlukan</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#FAA300] to-[#FF8C00] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm sm:text-base">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Tes Seleksi</h4>
                <p className="text-sm sm:text-base text-gray-600">Mengikuti tes akademik dan wawancara</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-[#FAA300] to-[#FF8C00] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm sm:text-base">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Daftar Ulang</h4>
                <p className="text-sm sm:text-base text-gray-600">Finalisasi pendaftaran dan pembayaran</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya%20tentang%20alur%20pendaftaran%20Pesat%20School"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
          >
            <div className="flex-shrink-0">
              <svg 
                className="w-5 sm:w-6 h-5 sm:h-6 group-hover:rotate-12 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
              </svg>
            </div>
            <span>Tanya Alur Pendaftaran</span>
            <div className="flex-shrink-0">
              <svg 
                className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <div className="relative">
          <div className="rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
            <img
              src="/sekolah.webp"
              alt="Alur Pendaftaran SMP SMA SMK Pesat"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
          </div>

          {/* Enhanced Floating Stats */}
          <div className="absolute -bottom-6 sm:-bottom-8 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-orange-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="group cursor-pointer">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FAA300] group-hover:text-[#FF8C00] transition-colors duration-300">
                  4
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Langkah Mudah</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FAA300] group-hover:text-[#FF8C00] transition-colors duration-300">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Support</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FAA300] group-hover:text-[#FF8C00] transition-colors duration-300">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Online</div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#FAA300] to-[#FF8C00] rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-30 animate-bounce"></div>
        </div>
      </div>
    </div>

        {/* Website Links Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Pilih Jenjang Pendidikan
          </h3>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SMK Pesat",
                subtitle: "Sekolah Menengah Kejuruan",
                url: "https://smkpesat.sch.id/",
                color: "from-[#FAA300] to-[#FFCC70]",
                description: "Fokus pada keahlian praktis dan kesiapan kerja",
                icon: "⚙️"
              },
              {
                title: "SMA Pesat",
                subtitle: "Sekolah Menengah Atas",
                url: "https://smapesat.sch.id/",
                color: "from-[#00215E] to-[#3757B0]",
                description: "Persiapan optimal untuk perguruan tinggi",
                icon: "📚"
              },
              {
                title: "SMP Pesat",
                subtitle: "Sekolah Menengah Pertama",
                url: "https://smppesat.sch.id/",
                color: "from-[#34A853] to-[#56C596]",
                description: "Fondasi pendidikan karakter yang kuat",
                icon: "🌱"
              },
            ].map((site, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl sm:text-5xl mb-4">{site.icon}</div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    {site.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">
                    {site.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {site.description}
                  </p>
                </div>
                
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-6 py-3 sm:py-4 rounded-full text-white font-semibold shadow-md transition-all duration-300 bg-gradient-to-r ${site.color} hover:shadow-lg hover:scale-105`}
                >
                  Kunjungi Website
                </Link>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-50/50 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

      </div>

    
    </main>
  );
}