"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
              Mudah, Cepat, dan Transparan <br />{" "}
              <span className="relative inline-block">
                PPDB Online
                <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400"></span>
              </span>{" "}
              untuk Calon Siswa Baru
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-800 font-medium mb-6">
              Sistem Informasi <span className="font-bold">PPDB</span> membantu{" "}
              <span className="font-bold">orang tua</span> dan{" "}
              <span className="font-bold">calon siswa</span> melakukan proses
              pendaftaran secara <span className="font-bold">online</span>,
              praktis, dan dapat diakses di mana saja.
            </p>

            {/* List Fitur */}
            <ul className="space-y-2 text-slate-700 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-amber-500">✔</span> Formulir pendaftaran online
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500">✔</span> Informasi program dan jurusan
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500">✔</span> Status pendaftaran transparan
              </li>
            </ul>

           {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4">
  {/* Button Program */}
  <Link href="/program">
    <button className="relative group px-6 py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-semibold shadow-md w-full sm:w-auto overflow-hidden transition-all duration-300">
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        🎓 Lihat Program Sekolah
      </span>
      <span className="absolute inset-0 bg-slate-900 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
    </button>
  </Link>

  {/* Button Daftar */}
  <Link href="/daftar">
    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:from-amber-600 hover:to-orange-600 active:scale-95 transition duration-300 flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto">
      🚀 Daftar Sekarang
    </button>
  </Link>
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
    </div>
  );
}
