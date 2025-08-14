"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-amber-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-amber-400/30 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-blue-400/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rotate-45 animate-bounce delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-8 py-20 sm:py-28 md:py-32 min-h-screen flex items-center z-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Content */}
          <div className="text-center space-y-8 mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-amber-300 font-medium text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Pendaftaran Dibuka 2024/2025
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-amber-300 bg-clip-text text-transparent animate-pulse">
                SMK INFORMATIKA
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                PESAT
              </span>
            </h1>

            {/* Subtitle with Typewriter Effect */}
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl md:text-3xl text-blue-200 font-bold">
                Sistem Informasi Pendaftaran Siswa Baru
              </p>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Membentuk Generasi Digital yang Inovatif, Kreatif, dan Berkarakter Unggul
              </p>
            </div>

            {/* CTA Buttons with Glassmorphism */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/portal-ppdb/link-pendaftaran" passHref>
                <button className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-500 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-amber-400/25">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Daftar Sekarang
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
              
              <Link href="https://smkpesat.sch.id/" target="_blank" rel="noopener noreferrer" passHref>
                <button className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <span className="flex items-center justify-center gap-2">
                    Jelajahi Sekolah
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* School Image with Modern Frame */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative group">
              {/* Glowing Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/20">
                <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl">
                  <Image
                    src="/sekolah.webp"
                    alt="Gedung SMK Informatika Pesat"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    priority
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Cards */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 z-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-amber-300 font-semibold mb-6">
              Tentang Kami
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Mengapa Memilih 
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"> SMK Pesat?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Dengan pengalaman lebih dari 15 tahun, kami telah meluluskan ribuan siswa yang kini berkarir sukses di industri teknologi terkemuka
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Kurikulum Terdepan</h3>
              <p className="text-white/70 mb-6">Pembelajaran berbasis industri 4.0 dengan teknologi terkini</p>
              <div className="text-4xl font-black text-amber-400">100%</div>
              <p className="text-white/60 text-sm">Update Materi</p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Alumni Sukses</h3>
              <p className="text-white/70 mb-6">Lulusan yang berkarir di perusahaan teknologi ternama</p>
              <div className="text-4xl font-black text-amber-400">1500+</div>
              <p className="text-white/60 text-sm">Alumni Tersebar</p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mitra Industri</h3>
              <p className="text-white/70 mb-6">Kerja sama dengan perusahaan terkemuka untuk magang & karir</p>
              <div className="text-4xl font-black text-amber-400">50+</div>
              <p className="text-white/60 text-sm">Partner Industri</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/20">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-4 rounded-xl">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left pr-4">
                <p className="text-white font-bold">Siap memulai perjalanan teknologimu?</p>
                <p className="text-white/70 text-sm">Bergabung dengan ribuan alumni sukses lainnya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button with Modern Design */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bertanya%20tentang%20PPDB"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
          aria-label="Chat via WhatsApp"
        >
          <Image
            src="/whatsapp-logo.png"
            alt="WhatsApp"
            width={24}
            height={24}
            className="mr-3"
          />
          <span className="font-semibold hidden sm:block">Chat Sekarang</span>
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">1</span>
          </div>
          
          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-green-500 rounded-2xl animate-ping opacity-20"></div>
        </a>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}