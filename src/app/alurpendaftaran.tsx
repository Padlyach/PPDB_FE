"use client";

import { useState } from "react";

// Component untuk Alur Pendaftaran
type AlurPendaftaranProps = {
  onBack: () => void;
};

export function AlurPendaftaran({ onBack }: AlurPendaftaranProps) {

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Halaman Utama
        </button>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-semibold mb-4">
            PPDB Sekolah Pesat
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Alur Pendaftaran PPDB
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ikuti langkah-langkah berikut untuk mendaftar sebagai siswa baru di Sekolah Pesat
          </p>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Periode Pendaftaran & Pembayaran Awal
                    </h3>
                    <div className="bg-blue-50 p-4 rounded-lg mb-3">
                      <p className="text-blue-800 font-semibold">📅 Periode: 25 Oktober - 10 November 2025</p>
                    </div>
                    <div className="space-y-2 text-slate-700">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">💰</span>
                        <p>Total pembayaran awal: <span className="font-bold text-blue-900">Rp5.400.000</span></p>
                      </div>
                      <div className="ml-6 space-y-1 text-sm">
                        <p>• Rp400.000 → Biaya pendaftaran</p>
                        <p>• Rp5.000.000 → DP (uang muka) masuk sekolah</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Connector Line */}
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-transparent h-8 transform translate-y-4"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Penerimaan Surat Undangan Observasi
                    </h3>
                    <div className="flex items-start gap-2 text-slate-700">
                      <span className="text-blue-500 text-xl mt-1">📧</span>
                      <p>
                        Ayah/bunda akan menerima <span className="font-bold text-blue-900">surat undangan jadwal observasi</span> dari pihak sekolah paling lama <span className="font-bold">3 hari</span> setelah pembayaran awal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-transparent h-8 transform translate-y-4"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Pelaksanaan Observasi atau Wawancara
                    </h3>
                    <div className="flex items-start gap-2 text-slate-700">
                      <span className="text-blue-500 text-xl mt-1">🏫</span>
                      <p>
                        Dilaksanakan di sekolah sesuai tanggal yang tertera pada Surat Undangan Observasi yang Ayah/bunda terima.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-transparent h-8 transform translate-y-4"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Pengumuman Penerimaan Siswa Baru
                    </h3>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-start gap-2 text-green-800">
                        <span className="text-green-500 text-xl mt-1">📢</span>
                        <p>
                          Orang tua akan menerima <span className="font-bold">Surat Keterangan Penerimaan Siswa Baru</span> (Hasil observasi) pada tanggal <span className="font-bold">20 November 2025</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-transparent h-8 transform translate-y-4"></div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Penyelesaian Dana Investasi
                    </h3>
                    <p className="text-slate-700 mb-4">
                      Melakukan penyelesaian dana investasi maksimal <span className="font-bold text-blue-900">3 minggu</span> setelah surat kelulusan diterima dari sekolah, jika ayah bunda melakukan pelunasan lebih dari tiga minggu menjadi harga gelombang satu.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-500">
                        <p className="text-sm text-slate-700">⚠ Pelunasan lebih dari 5 minggu → <span className="font-bold text-amber-700">Menjadi harga diskon gelombang 1</span></p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                        <p className="text-sm text-slate-700">⚠ Pelunasan lebih dari periode Gelombang 1 → <span className="font-bold text-red-600">Menjadi harga gelombang 2</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-10 bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl border-2 border-orange-300 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl">⚠️</span>
              <div>
                <h4 className="font-bold text-orange-900 text-xl mb-3">
                  Informasi Penting!
                </h4>
                <p className="text-orange-800 font-medium leading-relaxed">
                  Apabila siswa dinyatakan tidak diterima sebagai siswa baru, maka Uang DP dikembalikan dengan dikurangi biaya administrasi sebesar <span className="font-bold">Rp5.000.000 (termasuk biaya pendaftaran Rp400.000)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}