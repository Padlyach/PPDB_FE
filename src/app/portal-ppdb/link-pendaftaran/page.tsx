import Link from "next/link";
import Image from "next/image";

export default function LinkPendaftaran() {
  return (
    <main className="min-h-screen py-16 px-6 bg-gradient-to-b from-[#fdfdfd] to-[#f3f6fb]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00215E] to-[#FAA300] tracking-tight drop-shadow-sm">
            LINK PENDAFTARAN
          </h2>
          <div className="mt-3 w-28 h-1 rounded-full bg-gradient-to-r from-[#FAA300] to-[#00215E]" />
        </div>

        {/* Intro Section */}
        <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pendaftaran peserta didik baru untuk{" "}
              <strong>SMP, SMA, dan SMK Pesat</strong> telah dibuka! Kami
              mengundang orang tua dan calon siswa untuk bergabung dalam
              lingkungan pendidikan yang unggul, Islami, dan responsif terhadap
              perkembangan zaman.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Segera daftarkan diri Anda dan raih masa depan cerah bersama
              Pesat School. Jadilah bagian dari generasi cerdas, mandiri, dan
              berdaya saing tinggi!
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="/sekolah.webp"
                alt="Pendaftaran SMP SMA SMK Pesat"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Website Links Section */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {[
            {
              title: "Website SMK",
              url: "https://smkpesat.sch.id/",
              color: "from-[#FAA300] to-[#FFCC70]",
            },
            {
              title: "Website SMA",
              url: "https://smapesat.sch.id/",
              color: "from-[#00215E] to-[#3757B0]",
            },
            {
              title: "Website SMP",
              url: "https://smppesat.sch.id/",
              color: "from-[#34A853] to-[#56C596]",
            },
          ].map((site, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {site.title}
              </h3>
              <Link
                href={site.url}
                className={`inline-block px-5 py-3 rounded-full text-white font-semibold shadow-md transition-all duration-300 bg-gradient-to-r ${site.color} hover:shadow-lg hover:scale-105`}
              >
                Kunjungi {site.title}
              </Link>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Chat Floating Button */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya%20tentang%20PPDB"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-white p-2 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-110"
      >
        <Image
          src="/whatsapp-logo.png"
          alt="Chat via WhatsApp"
          width={65}
          height={65}
          className="rounded-full"
        />
      </a>
    </main>
  );
}
