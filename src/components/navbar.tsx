'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-purple-900 shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo dan Nama Sekolah */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          
          <Image src="/smk.png" alt="Logo Sekolah" width={60} height={60} className="rounded-full transform transition-transform duration-300 group-hover:scale-110 shadow-lg hover:shadow-xl" />
         <h5 className="text-3xl font-black text-center">
           <span className="text-[#00215E]">SMK</span> <span className="text-[#FAA300]">INFORMATIKA PESAT</span>
          </h5>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-5 font-extrabold text-lg">
          <li>
            <Link href="/" className="relative py-2 text-[#00215E] hover:text-[#FAA300] transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#FFD700] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              BERANDA
            </Link>
          </li>
          <li>
            <Link href="/profil-sekolah" className="relative py-2 text-[#00215E] hover:text-[#FAA300] transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#FFD700] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              PROFIL SEKOLAH
            </Link>
          </li>
          <li>
            <Link href="/ekstrakurikuler" className="relative py-2 text-[#00215E] hover:text-[#FAA300] transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#FFD700] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              EKSTRAKURIKULER
            </Link>
          </li>
          <li>
            <Link href="/galeri" className="relative py-2 text-[#00215E] hover:text-[#FAA300] transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#FFD700] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              GALERI
            </Link>
          </li>
        </ul>

        {/* Menu Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-3 rounded-lg hover:bg-[#0B4C95]/20 transition-all duration-300 hover:shadow-md" aria-label="Toggle Menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-8 pb-6 bg-white backdrop-blur-lg shadow-inner">
          <ul className="space-y-4 font-extrabold text-lg">
            <li>
              <Link href="/" className="block py-4 px-6 rounded-xl text-[#00215E] hover:bg-[#0B4C95]/20 hover:text-[#FAA300] transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg" onClick={() => setIsOpen(false)}>
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/profil-sekolah" className="block py-4 px-6 rounded-xl text-[#00215E] hover:bg-[#0B4C95]/20 hover:text-[#FAA300] transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg" onClick={() => setIsOpen(false)}>
                Profil Sekolah
              </Link>
            </li>
            <li>
              <Link href="/ekstrakurikuler" className="block py-4 px-6 rounded-xl text-[#00215E] hover:bg-[#0B4C95]/20 hover:text-[#FAA300] transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg" onClick={() => setIsOpen(false)}>
                Ekstrakurikuler
              </Link>
            </li>
            <li>
              <Link href="/galeri" className="block py-4 px-6 rounded-xl text-[#00215E] hover:bg-[#0B4C95]/20 hover:text-[#FAA300] transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg" onClick={() => setIsOpen(false)}>
                Galeri
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
