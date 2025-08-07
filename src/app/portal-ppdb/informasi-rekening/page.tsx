import Image from "next/image";

export default function InformasiRekening() {
  return (
    <main className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-[#f9f9f9]">
      <div className="max-w-4xl mx-auto">
        {/* Judul Halaman */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00215E] to-[#FAA300] hover:from-[#FAA300] hover:to-[#00215E] transition-all duration-500 mb-4">
            INFORMASI REKENING
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00215E] to-[#FAA300] rounded-full mt-4"></div>
        </div>

        {/* Banner */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
          <Image
            src="/rekening-banner.webp" // Ganti dengan gambar banner rekening yang sesuai
            alt="Banner Informasi Rekening"
            width={1200}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Informasi Rekening */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-2xl font-semibold text-[#00215E] mb-4">
            Silakan lakukan pembayaran pendaftaran ke rekening berikut:
          </h3>
          <ul className="text-gray-700 text-base space-y-4">
            <li>
              <strong>Bank:</strong> BNI
            </li>
            <li>
              <strong>Nomor Rekening:</strong> 1234567890
            </li>
            <li>
              <strong>Atas Nama:</strong> SMK Informatika Pesat
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            Mohon lakukan konfirmasi pembayaran kepada panitia PPDB setelah melakukan transfer. Simpan bukti pembayaran untuk ditunjukkan saat proses daftar ulang.
          </p>

          {/* Alternatif Pembayaran (opsional) */}
          <div className="mt-8 border-t pt-6">
            <h4 className="text-lg font-bold text-[#00215E] mb-2">Alternatif Pembayaran:</h4>
            <p className="text-sm text-gray-600">QRIS / E-Wallet akan tersedia pada saat pendaftaran ulang.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
