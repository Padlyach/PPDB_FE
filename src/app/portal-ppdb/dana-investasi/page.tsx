import Link from 'next/link';
import Image from 'next/image';
export default function DanaInvestasi() {
  return (
    <main className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-[#f9f9f9]">
      <div className="max-w-6xl mx-auto">
        {/* Judul Halaman */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00215E] to-[#FAA300] hover:from-[#FAA300] hover:to-[#00215E] transition-all duration-500 mb-4">
            DANA INVESTASI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00215E] to-[#FAA300] rounded-full mt-4"></div>
        </div>

        {/* Banner */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-16">
          <img
            src="/ppdb-pesat.webp"
            alt="Banner Dana Investasi"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>

        {/* Grid Investasi */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Dana Investasi SMK',
              description: 'Rincian biaya pendidikan dan fasilitas SMK Pesat yang mencakup pengembangan keterampilan dan praktik industri.',
              href: '/dana-investasi/smk'
            },
            {
              title: 'Dana Investasi SMA',
              description: 'Informasi dana investasi SMA Pesat yang menunjang akademik, karakter, dan teknologi berbasis nilai.',
              href: '/dana-investasi/sma'
            },
            {
              title: 'Dana Investasi SMP',
              description: 'Detail biaya pendidikan SMP Pesat, termasuk kegiatan penunjang, karakter, dan pembinaan siswa.',
              href: '/dana-investasi/smp'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border hover:border-[#FAA300] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#00215E] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <div className="mt-6">
                <Link
                  href={item.href}
                  className="inline-block w-full text-center px-4 py-2 bg-[#FAA300] text-white rounded-full text-sm font-bold shadow-md hover:shadow-[0_0_12px_#FAA300] transition-all duration-300"
                >
                  Lihat Rincian
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* WhatsApp Chat Button */}
              <a
                href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya%20tentang%20PPDB"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <Image
                  src="/whatsapp-logo.png"
                  alt="Chat via WhatsApp"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </a>
      </div>
    </main>
  );
}
