import Link from "next/link";
import Image from 'next/image';
export default function LinkPendaftaran() {
  return (
    <main className="min-h-screen py-10 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00215E] to-[#FAA300] hover:from-[#FAA300] hover:to-[#00215E] transition-all duration-500 mb-4">
            LINK PENDAFTARAN
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00215E] to-[#FAA300] rounded-full mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pendaftaran peserta didik baru untuk{" "}
              <strong>SMP, SMA, dan SMK Pesat</strong> telah dibuka! Kami
              mengundang orang tua dan calon siswa untuk bergabung dalam
              lingkungan pendidikan yang unggul, Islami, dan responsif terhadap
              perkembangan zaman. Dengan kurikulum inovatif, tenaga pendidik
              profesional, dan fasilitas modern, Pesat School berkomitmen
              mencetak generasi berkarakter, berwawasan global, serta unggul
              secara akademik dan non-akademik.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Segera daftarkan diri Anda dan raih masa depan cerah bersama Pesat
              School. Jadilah bagian dari generasi cerdas, mandiri, dan berdaya
              saing tinggi!
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="/sekolah.webp"
                alt="Pendaftaran SMP SMA SMK Pesat"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {/* ...existing cards like Nama Sekolah, NPSN, etc... */}
        </div>

        {/* Website Links */}
        <div className="flex items-center justify-center bg-white px-4">
          <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Website SMK */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#00215E] hover:shadow-[5px_5px_20px_#00215E] transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#00215E] mb-4 flex items-center justify-center">
                Website SMK
              </h3>
              <Link
                href="https://smkpesat.sch.id/"
                className="inline-block px-4 py-2 bg-[#FAA300] text-white rounded-full text-sm font-bold shadow-lg hover:shadow-[0_0_10px_#FAA300] transition-all duration-300"
              >
                Kunjungi Website SMK
              </Link>
            </div>

            {/* Website SMA */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#00215E] hover:shadow-[5px_5px_20px_#00215E] transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#00215E] mb-4 flex items-center justify-center">
                Website SMA
              </h3>
              <Link
                href="https://smapesat.sch.id/"
                className="inline-block px-4 py-2 bg-[#FAA300] text-white rounded-full text-sm font-bold shadow-lg hover:shadow-[0_0_10px_#FAA300] transition-all duration-300"
              >
                Kunjungi Website SMA
              </Link>
            </div>

            {/* Website SMP */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#00215E] hover:shadow-[5px_5px_20px_#00215E] transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#00215E] mb-4 flex items-center justify-center">
                Website SMP
              </h3>
              <Link
                href="https://smppesat.sch.id/"
                className="inline-block px-4 py-2 bg-[#FAA300] text-white rounded-full text-sm font-bold shadow-lg hover:shadow-[0_0_10px_#FAA300] transition-all duration-300"
              >
                Kunjungi Website SMP
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-20 px-6 bg-white ">
        <div className="max-w-6xl mx-auto bg-white">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-[#00215E] mb-12">
            Hubungi Kami
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <button className="flex items-center space-x-4 bg-white p-4 rounded-lg hover:bg-[#00215E]/10 transition duration-300 w-full">
                <div className="w-10 h-10 bg-[#00215E]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#00215E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">Alamat</h4>
                  <p className="text-sm text-gray-600">
                    Jl. Pendidikan No. 123, Jakarta Selatan, 12345
                  </p>
                </div>
              </button>

              <button className="flex items-center space-x-4 bg-white p-4 rounded-lg hover:bg-[#00215E]/10 transition duration-300 w-full">
                <div className="w-10 h-10 bg-[#00215E]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#00215E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">Email</h4>
                  <p className="text-sm text-gray-600">info@smkpesat.sch.id</p>
                </div>
              </button>

              <button className="flex items-center space-x-4 bg-white p-4 rounded-lg hover:bg-[#00215E]/10 transition duration-300 w-full">
                <div className="w-10 h-10 bg-[#00215E]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#00215E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">Telepon</h4>
                  <p className="text-sm text-gray-600">(021) 123-4567</p>
                </div>
              </button>

              <button className="flex items-center space-x-4 bg-white p-4 rounded-lg hover:bg-[#00215E]/10 transition duration-300 w-full">
                <div className="w-10 h-10 bg-[#00215E]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#00215E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a2 2 0 002-2V6.5a2 2 0 00-2-2h-11a2 2 0 00-2 2v11a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">Instagram</h4>
                  <p className="text-sm text-gray-600">@smkpesat</p>
                </div>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-4 order-first md:order-last">
              <h4 className="text-xl font-bold mb-4 text-gray-800">
                Kirim Pesan
              </h4>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00215E] focus:border-transparent"
                      placeholder="Nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00215E] focus:border-transparent"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00215E] focus:border-transparent"
                    placeholder="Subjek"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Pesan
                  </label>
                  <textarea
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00215E] focus:border-transparent h-20"
                    placeholder="Pesan"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00215E] text-white py-1.5 px-4 rounded-lg hover:bg-[#00215E]/90 transition duration-300 text-sm font-semibold"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
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
    </main>
  );
}
