"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [showFlowModal, setShowFlowModal] = useState(false);

  const handleRequirementsClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFlowClick = () => {
    setShowFlowModal(true);
  };

  const closeFlowModal = () => {
    setShowFlowModal(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "6287711177442";
    const message = "Halo! Saya ingin bertanya mengenai pendaftaran PPDB Online Sekolah Pesat.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };
  
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <p className="text-amber-600 font-semibold mb-4">
              SISTEM INFORMASI PENDAFTARAN SISWA BARU (PPDB) ONLINE
            </p>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-snug mb-6">
              PPDB Sekolah Pesat<br />{" "}
              SMP Pesat Rising STAR, SMA Pesat School of Talent, dan SMK Pesat IT XPro.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-800 font-medium mb-6">
              Persiapkan dirimu untuk bergabung di <span className="font-bold">Sekolah Pesat!</span> Sekolah Umum 
              Berbasis Keagamaan, Berakrakter Akhlak Mulia, Pilihan Anak-anak Terpilih!
            </p>

            {/* List Fitur */}
            <ul className="space-y-2 text-slate-700 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-amber-600 font-bold">Gelombang 1 : 4 November 2025 - 28 Februari 2026</span> 
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-600 font-bold">Gelombang 2 : 1 Maret - 11 Juli 2026</span> 
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button
                onClick={handleRequirementsClick}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-colors duration-200"
              >
                Lihat Persyaratan Pendaftaran
              </button>
              <button
                onClick={handleFlowClick}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-colors duration-200"
              >
                Alur Pendaftaran
              </button>
            </div>
          </div>
          
          {/* Right Content - Foto Siswa */}
          <div className="relative max-w-xl w-full">
            <div className="relative overflow-hidden">
              <Image
                src="/fotosmk.webp"
                alt="Siswa SMK Informatika Pesat"
                width={600}
                height={600}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal Persyaratan */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📋</span>
                  <h2 className="text-2xl font-bold text-white">
                    Persyaratan Pendaftaran
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-amber-100 transition-colors duration-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20"
                >
                  ×
                </button>
              </div>
              <p className="text-amber-100 mt-2 font-medium">
                Peserta Didik Baru Sekolah Pesat
              </p>
            </div>
            
            {/* Modal Content */}
            <div className="px-8 py-6">
              <div className="space-y-4">
                {[
                  { icon: "🎓", text: "Fotocopy Ijazah" },
                  { icon: "📄", text: "Fotocopy Akte Lahir" },
                  { icon: "👨‍👩‍👧‍👦", text: "Fotocopy Kartu Keluarga" },
                  { icon: "🆔", text: "Nomor Induk Siswa Nasional (NISN)" },
                  { icon: "📸", text: "Pas Foto 3x4 2 lembar" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        {index + 1}. {item.text}
                      </span>
                    </div>
                    <div className="text-amber-500 text-xl">
                      ✔
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Alur Pendaftaran */}
      {showFlowModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🔄</span>
                  <h2 className="text-2xl font-bold text-white">
                    Alur Pendaftaran PPDB
                  </h2>
                </div>
                <button
                  onClick={closeFlowModal}
                  className="text-white hover:text-blue-100 transition-colors duration-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20"
                >
                  ×
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="px-8 py-6">
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        Periode Pendaftaran & Pembayaran Awal
                      </h3>
                      <ul className="space-y-1 text-slate-700">
                        <li>• Periode: 25 Oktober - 10 November 2025</li>
                        <li>• Total pembayaran awal: <span className="font-bold">Rp5.400.000</span></li>
                        <li>• Rp400.000 → Biaya pendaftaran</li>
                        <li>• Rp5.000.000 → DP (uang muka) masuk sekolah</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        Penerimaan Surat Undangan Observasi
                      </h3>
                      <p className="text-slate-700">
                        Ayah/bunda akan menerima <span className="font-bold">surat undangan jadwal observasi</span> dari pihak sekolah paling lama 3 hari setelah pembayaran awal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        Pelaksanaan observasi atau wawancara
                      </h3>
                      <p className="text-slate-700">
                        Dilaksanakan di sekolah sesuai tanggal yang tertera pada Surat Undangan Observasi yang Ayah/bunda terima.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        Pengumuman penerimaan siswa baru (Hasil Observasi)
                      </h3>
                      <p className="text-slate-700">
                        Orang tua akan menerima Surat Keterangan Penerimaan Siswa Baru (Hasil observasi) pada tanggal 20 November 2025.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        Setelah menerima Informasi Penerimaan Siswa Baru
                      </h3>
                      <p className="text-slate-700 mb-3">
                        Melakukan penyelesaian dana investasi maksimal 5 minggu setelah surat kelulusan diterima, dengan ketentuan sebagai berikut:
                      </p>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Diskon Open House sebesar Rp5.000.000 hanya berlaku apabila pelunasan tepat waktu.</li>
                        <li>• Bagi siswa/i SMP Pesat yang melanjutkan ke SMA/SMK Pesat <span className="font-bold">mendapat diskon alumni sebesar Rp5.000.000</span></li>
                        <li>• Pelunasan lebih dari 5 minggu → <span className="font-bold text-red-600">Menjadi harga diskon gelombang 1</span></li>
                        <li>• Pelunasan lebih dari periode Gelombang 1 → <span className="font-bold text-red-600">Menjadi harga gelombang 2</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Important Note */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border-2 border-orange-300">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">⚠️</span>
                    <div>
                      <h4 className="font-bold text-orange-900 text-lg mb-2">
                        Penting!
                      </h4>
                      <p className="text-orange-800 font-medium">
                        Apabila siswa dinyatakan tidak diterima sebagai siswa baru, maka Uang DP dikembalikan dengan dikurangi biaya administrasi sebesar <span className="font-bold">Rp5.000.000 (termasuk biaya pendaftaran Rp400.000)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleWhatsAppClick}
          className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Chat via WhatsApp"
        >
          {/* WhatsApp Icon */}
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
          </svg>
          
          {/* Tooltip */}
          <div className="absolute bottom-16 right-0 mb-2 hidden group-hover:block">
            <div className="bg-slate-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Chat via WhatsApp
              <div className="absolute top-full right-4 border-4 border-transparent border-t-slate-900"></div>
            </div>
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
        </button>
      </div>
    </div>  
  );
}