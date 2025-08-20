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
              <Link href="/program">
                <button className="px-6 py-3 rounded-lg border border-slate-800 text-slate-900 font-semibold hover:bg-slate-100 transition">
                  Lihat Program Sekolah
                </button>
              </Link>
              <Link href="/daftar">
                <button className="px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5v14m7-7H5" />
                  </svg>
                  Daftar Sekarang
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

      {/* Partner Section */}
      <section className="py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-8">
            <p className="text-slate-800 font-semibold">
              Perusahaan tempat siswa magang dan alumni kami bekerja
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10">
            <Image
              src="/logo-telkomsat.png"
              alt="Telkomsat"
              width={150}
              height={80}
            />
            <Image src="/logo-maxplus.png" alt="Max+" width={120} height={60} />
            <Image src="/logo-orva.png" alt="Orva Motion" width={120} height={60} />
            <Image src="/logo-asnet.png" alt="Asnet" width={120} height={60} />
            <p className="text-slate-600 font-medium">
              dan 40+ Perusahaan lainnya
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
