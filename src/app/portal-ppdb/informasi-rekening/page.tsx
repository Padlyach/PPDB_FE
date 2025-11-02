import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen py-12 md:py-16 px-4 bg-gradient-to-b from-white to-[#f9f9f9]">
      <div className="max-w-4xl mx-auto">
        {/* Judul Halaman */}
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-[#FAA300] tracking-tight drop-shadow-sm">
            INFORMASI REKENING
          </h2>
          <div className="mt-3 w-28 h-1 rounded-full bg-[#FAA300]" />
        </div>

        {/* Informasi Rekening */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-[#00215E] mb-6 text-center">
            Informasi Rekening
          </h3>

          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-4">
              Pembayaran dapat dilakukan dengan <strong>2 cara:</strong>
            </p>
            <div className="bg-gradient-to-r from-[#00215E]/5 to-[#FAA300]/5 rounded-lg p-4 mb-6">
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li className="font-semibold">Debet</li>
                <li className="font-semibold">Transfer Online</li>
              </ol>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-[#00215E] mb-4">
              Rekening Tujuan Transfer
            </h4>
            <p className="text-gray-600 mb-4 italic">
              Ditujukan kepada rekening <strong>(Pesat Birrulwalidain YYS)</strong> sebagai berikut:
            </p>

            {/* Rekening BJB */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-4 border-l-4 border-blue-500">
              <h5 className="text-lg font-bold text-[#00215E] mb-3 flex items-center">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-3">1</span>
                Rekening Utama
              </h5>
              <div className="space-y-3"> {/* Sedikit tambahan spasi antar baris */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-semibold text-gray-700 mb-1 sm:mb-0">Bank:</span>
                  <span className="font-bold text-[#00215E] sm:text-right">BJB</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-semibold text-gray-700 mb-1 sm:mb-0">Nomor Rekening:</span>
                  <span className="font-bold text-[#00215E] text-lg tracking-wider sm:text-right break-all sm:break-normal">
                    0130010023323
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-semibold text-gray-700 mb-1 sm:mb-0">Atas Nama:</span>
                  <span className="font-bold text-[#00215E] sm:text-right">Pesat Birrulwalidain YYS</span>
                </div>
              </div>
            </div>

            {/* Rekening BTN */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500">
              <h5 className="text-lg font-bold text-[#00215E] mb-3 flex items-center">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm mr-3">2</span>
                Rekening Alternatif
              </h5>
              <div className="space-y-3"> {/* Sedikit tambahan spasi antar baris */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-semibold text-gray-700 mb-1 sm:mb-0">Bank:</span>
                  <span className="font-bold text-[#00215E] sm:text-right">BTN</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-semibold text-gray-700 mb-1 sm:mb-0">Nomor Rekening:</span>
                  <span className="font-bold text-[#00215E] text-lg tracking-wider sm:text-right break-all sm:break-normal">
                    00227.01.30.000118.4
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-semibold text-gray-700 mb-1 sm:mb-0">Atas Nama:</span>
                  <span className="font-bold text-[#00215E] sm:text-right">Pesat Birrulwalidain YYS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nomor Konfirmasi Transfer */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-center">
            📱 NOMOR KONFIRMASI TRANSFER
          </h3>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <p className="text-base md:text-lg mb-4 leading-relaxed">
              Untuk mempercepat proses input transfer, silahkan mengirimkan notifikasi transfer tersebut pada nomor layanan konfirmasi transfer dengan mengklik link WhatsApp berikut ini:
            </p>

            <div className="text-center">
              <a
                href="https://wa.me/6285117550485"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-600 font-bold py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Konfirmasi via WhatsApp
              </a>
            </div>
          </div>

          <div className="text-center bg-white/10 backdrop-blur rounded-lg p-4">
            <p className="text-sm leading-relaxed">
              <strong>📋 Catatan:</strong> Admin akan merespon pesan yang masuk dari urutan chat terbawah.
            </p>
            <p className="text-lg mt-2">Terimakasih 🙏</p>
          </div>
        </div>

        {/* Petunjuk Tambahan */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h4 className="text-lg font-bold text-[#00215E] mb-3 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Petunjuk Penting
          </h4>
          <ul className="text-sm text-gray-700 space-y-2 pl-6">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              Pastikan nama pengirim transfer sesuai dengan nama pendaftar
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              Simpan bukti transfer untuk ditunjukkan saat proses daftar ulang
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              Konfirmasi transfer melalui WhatsApp untuk mempercepat proses verifikasi
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              Jika ada kesulitan, hubungi panitia PPDB melalui kontak yang tersedia
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
