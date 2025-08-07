import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function InformasiRekening() {
  return (
    <main className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-[#f9f9f9]">
      <div className="max-w-6xl mx-auto">
        {/* Judul Halaman */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00215E] to-[#FAA300] hover:from-[#FAA300] hover:to-[#00215E] transition-all duration-500 mb-4">
            INFORMASI REKENING
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00215E] to-[#FAA300] rounded-full mt-4"></div>
        </div>

        {/* Grid 2 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Informasi & Tombol */}
          <div>
            <h3 className="text-2xl font-bold text-[#00215E] mb-4">
              Pembayaran Dana Investasi
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              Pembayaran dana investasi pendidikan SMK/SMA/SMP Pesat dilakukan melalui transfer ke rekening resmi sekolah. Mohon untuk mencantumkan nama siswa dan jenjang saat melakukan pembayaran agar memudahkan proses verifikasi.
            </p>

            <div className="bg-white border border-[#FAA300] rounded-xl p-6 shadow-md mb-6">
              <p className="text-sm text-gray-700 mb-2">🔸 <strong>Bank:</strong> BCA</p>
              <p className="text-sm text-gray-700 mb-2">🔸 <strong>No. Rekening:</strong> 1234567890</p>
              <p className="text-sm text-gray-700">🔸 <strong>Atas Nama:</strong> SMK Informatika Pesat</p>
            </div>

            <Link
              href="https://api.whatsapp.com/send?phone=6287711177442&text=Saya%20tahu%20SMK%20dari%20Web,%20boleh%20jelaskan%20tentang%20SMK%20?"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaWhatsapp className="text-lg" />
              Hubungi Kami
            </Link>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/ppdb-pesat.webp"
              alt="Gambar Sekolah Pesat"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
