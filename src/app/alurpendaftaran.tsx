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
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16 lg:py-20 font-sans">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Tombol Kembali */}
        <button
          onClick={onBack}
          className="mb-8 sm:mb-10 inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 font-medium bg-orange-100 hover:bg-orange-200 px-4 py-2 rounded-lg text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Halaman Utama</span>
        </button>

        {/* Header Section */}
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

        {/* Timeline Section */}
        <div className="space-y-6 sm:space-y-8">
          {/* Step 1 - Mengisi Formulir */}
          <div className="flex gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-orange-600 font-bold text-xl sm:text-2xl text-white shadow-md">
                1
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <h3 className="mb-3 text-xl sm:text-2xl font-bold text-slate-900">
                Mengisi Formulir Pendaftaran Calon Siswa Baru
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-2">
                Melalui link berikut:
              </p>
              <a 
                href="https://s.id/SekolahPesat" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700 underline text-sm sm:text-base"
              >
                s.id/SekolahPesat
              </a>
            </div>
          </div>

          {/* Step 2 - Penyelesaian Dana Pendaftaran */}
          <div className="flex gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-orange-600 font-bold text-xl sm:text-2xl text-white shadow-md">
                2
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <h3 className="mb-3 text-xl sm:text-2xl font-bold text-slate-900">
                Melakukan Penyelesaian Dana Pendaftaran & Tahap Awal
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm sm:text-base text-slate-600">
                  <Wallet className="h-5 w-5 flex-shrink-0 text-orange-500" />
                  <span>
                    Total pembayaran awal:{" "}
                    <span className="font-semibold text-slate-900">Rp5.400.000</span>
                  </span>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <p className="text-sm sm:text-base text-slate-700 mb-3 font-medium">
                    Transfer ke rekening:
                  </p>
                  <div className="space-y-2 text-sm sm:text-base">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="font-semibold text-slate-700 min-w-[100px]">Nama rek:</span>
                      <span className="text-slate-900">Yayasan Pesat Birrul Walidain</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="font-semibold text-slate-700 min-w-[100px]">Nomor rek:</span>
                      <span className="text-slate-900 font-mono">0130010023323</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="font-semibold text-slate-700 min-w-[100px]">Bank:</span>
                      <span className="text-slate-900">BJB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - Pelaksanaan Observasi */}
          <div className="flex gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-orange-600 font-bold text-xl sm:text-2xl text-white shadow-md">
                3
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <h3 className="mb-3 text-xl sm:text-2xl font-bold text-slate-900">
                Pelaksanaan Observasi Calon Siswa Baru
              </h3>
              <div className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                <p>
                  Ayah/Bunda akan menerima Surat Undangan Observasi{" "}
                  <span className="font-semibold text-slate-900">selambatnya 3 hari</span>{" "}
                  setelah pembayaran awal. Tanggal, waktu dan tempat pelaksanaan sesuai dengan yang tertera pada Surat Undangan Observasi.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 - Menerima Konfirmasi Hasil */}
          <div className="flex gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-orange-600 font-bold text-xl sm:text-2xl text-white shadow-md">
                4
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <h3 className="mb-3 text-xl sm:text-2xl font-bold text-slate-900">
                Menerima Konfirmasi Hasil Observasi
              </h3>
              <div className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                <Megaphone className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                <p>
                  Surat Keterangan Penerimaan Siswa Baru akan diterima setelah Ayah/Bunda dan Ananda melaksanakan observasi.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 - Menyelesaikan Dana Investasi */}
          <div className="flex gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-orange-600 font-bold text-xl sm:text-2xl text-white shadow-md">
                5
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <h3 className="mb-3 text-xl sm:text-2xl font-bold text-slate-900">
                Menyelesaikan Dana Investasi Pendidikan
              </h3>
              <div className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                <School className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                <p>
                  Selesaikan dana investasi pendidikan sesuai dengan ketentuan waktu yang telah ditetapkan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Informasi Penting */}
        <div className="mt-12 sm:mt-16 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-bold text-orange-900">
                Informasi Penting
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Apabila siswa dinyatakan tidak diterima sebagai siswa baru, maka
                Uang DP dikembalikan dengan dikurangi biaya administrasi sebesar{" "}
                <span className="font-semibold text-slate-900">
                  Rp400.000
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Demo component - TIDAK PERLU DIEXPORT jika tidak digunakan
export default function App() {
  return (
    <AlurPendaftaran
      onBack={() => console.log("Kembali ke halaman utama diklik")}
    />
  );
}