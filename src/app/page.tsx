"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [showModal, setShowModal] = useState(false);

  const handleRequirementsClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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

            {/* Persyaratan Button */}
            <button
              onClick={handleRequirementsClick}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-colors duration-200 mb-6"
            >
              Lihat Persyaratan Pendaftaran
            </button>
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
      
      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50 p-4">
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
    </div>
  );
}
