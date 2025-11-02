"use client";

import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Wallet,
  Mail,
  School,
  Megaphone,
  AlertTriangle,
} from "lucide-react";

// Component untuk Alur Pendaftaran
type AlurPendaftaranProps = {
  onBack: () => void;
};

export function AlurPendaftaran({ onBack }: AlurPendaftaranProps) {
  return (
    // Latar belakang netral
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16 lg:py-20 font-sans">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        {/* Tombol Kembali - Tema Oranye */}
        <button
          onClick={onBack}
          className="mb-8 sm:mb-10 inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 font-medium transition-all duration-200 bg-orange-100 hover:bg-orange-200 px-4 py-2 rounded-lg text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Halaman Utama</span>
        </button>

        {/* Header Section - Tema Oranye */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 sm:px-6 py-2 rounded-full font-semibold mb-4 text-sm sm:text-base">
            PPDB Sekolah Pesat
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 sm:mb-4">
            Alur Pendaftaran PPDB
          </h1>
          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
            Ikuti langkah-langkah berikut untuk mendaftar sebagai siswa baru di
            Sekolah Pesat
          </p>
        </div>

        {/* Timeline Section - Desain Baru */}
        <div className="relative">
          {/* Garis Timeline Vertikal - DIHAPUS SESUAI PERMINTAAN */}
          {/* <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-orange-200 hidden sm:block"></div> */}

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="relative pl-16">
              {/* Bulatan Angka - Tema Oranye */}
              <div className="absolute left-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 font-bold text-white shadow-md">
                1
              </div>
              {/* Kartu Konten */}
              <div className="min-h-[112px] rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  Periode Pendaftaran & Pembayaran Awal
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CalendarDays className="h-4 w-4 flex-shrink-0 text-orange-500" />
                    <span>
                      Periode:{" "}
                      <span className="font-medium text-slate-800">
                        25 Oktober - 10 November 2025
                      </span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <Wallet className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                    <div>
                      <p>
                        Total pembayaran awal:{" "}
                        <span className="font-medium text-slate-800">
                          Rp5.400.000
                        </span>
                      </p>
                      <ul className="mt-1 list-disc list-inside text-xs text-slate-500">
                        <li>Rp400.000 (Biaya pendaftaran)</li>
                        <li>Rp5.000.000 (DP masuk sekolah)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 font-bold text-white shadow-md">
                2
              </div>
              <div className="min-h-[112px] rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  Penerimaan Surat Undangan Observasi
                </h3>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                  <p>
                    Ayah/bunda akan menerima{" "}
                    <span className="font-medium text-slate-900">
                      surat undangan jadwal observasi
                    </span>{" "}
                    dari pihak sekolah paling lama{" "}
                    <span className="font-medium text-orange-600">3 hari</span>{" "}
                    setelah pembayaran awal.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 font-bold text-white shadow-md">
                3
              </div>
              <div className="min-h-[112px] rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  Pelaksanaan Observasi atau Wawancara
                </h3>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <School className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                  <p>
                    Dilaksanakan di sekolah sesuai tanggal yang tertera pada
                    Surat Undangan Observasi yang Ayah/bunda terima.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 font-bold text-white shadow-md">
                4
              </div>
              <div className="min-h-[112px] rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  Pengumuman Penerimaan Siswa Baru
                </h3>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <Megaphone className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                  <p>
                    Orang tua akan menerima{" "}
                    <span className="font-medium text-slate-900">
                      Surat Keterangan Penerimaan Siswa Baru
                    </span>{" "}
                    (Hasil observasi).
                  </p>
                </div>
                <div className="mt-3 rounded-lg border border-green-200 bg-green-50 p-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-800">
                    <CalendarDays className="h-4 w-4 flex-shrink-0" />
                    <span>
                      Tanggal Pengumuman: 20 November 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 font-bold text-white shadow-md">
                5
              </div>
              <div className="min-h-[112px] rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  Penyelesaian Dana Investasi
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  Melakukan penyelesaian dana investasi maksimal{" "}
                  <span className="font-medium text-orange-600">3 minggu</span>{" "}
                  setelah surat kelulusan diterima. Jika ayah bunda melakukan pelunasan lebih dari tiga minggu menjadi harga gelombang satu.
                </p>
                {/* Peringatan internal yang disederhanakan */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2 rounded-lg bg-amber-100 p-3 text-sm text-amber-900">
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <p>
                      Pelunasan lebih dari 5 minggu →{" "}
                      <span className="font-semibold">
                        Menjadi harga diskon gelombang 1
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg bg-red-100 p-3 text-sm text-red-900">
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <p>
                      Pelunasan lebih dari periode Gel. 1 →{" "}
                      <span className="font-semibold">
                        Menjadi harga gelombang 2
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Penutup untuk div.space-y-8 */}
        </div>
        {/* Penutup untuk div.relative */}

        {/* Important Note - Diubah menjadi Peringatan (Oranye) */}
        <div className="mt-12 sm:mt-16 rounded-xl border-l-4 border-orange-500 bg-orange-100 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-orange-900 sm:text-xl">
                Informasi Penting!
              </h4>
              <p className="leading-relaxed text-orange-900 text-sm sm:text-base">
                Apabila siswa dinyatakan tidak diterima sebagai siswa baru, maka
                Uang DP dikembalikan dengan dikurangi biaya administrasi sebesar{" "}
                <span className="font-bold">
                  Rp5.000.000 (termasuk biaya pendaftaran Rp400.000)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo component
export default function App() {
  // Mengganti alert dengan console.log agar lebih ramah browser
  return (
    <AlurPendaftaran
      onBack={() => console.log("Kembali ke halaman utama diklik")}
    />
  );
}

