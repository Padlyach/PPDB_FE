'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isWebsiteOpen, setIsWebsiteOpen] = useState(false);
  const [isKunjunganOpen, setIsKunjunganOpen] = useState(false);

  // Tambahan untuk dropdown mobile
  const [mobilePortalOpen, setMobilePortalOpen] = useState(false);
  const [mobileWebsiteOpen, setMobileWebsiteOpen] = useState(false);
  const [mobileKunjunganOpen, setMobileKunjunganOpen] = useState(false);

  return (
    <nav className="bg-white text-purple-900 shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo dan Nama Sekolah */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <Image src="/smk.png" alt="Logo Sekolah" width={60} height={60} className="transform transition-transform duration-300 group-hover:scale-110" />
          <h5 className="text-3xl font-black text-center">
            <span className="text-[#00215E]">PPDB</span> <span className="text-[#FAA300]">SMK INFORMATIKA PESAT</span>
          </h5>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-5 font-extrabold text-lg relative">
          <li className='relative mt-2'>
            <Link href="/" className="relative my-2 text-[#00215E] hover:text-[#FAA300] transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#FFD700] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              BERANDA
            </Link>
          </li>

          {/* Dropdown Portal PPDB */}
          <li className="relative">
            <button onClick={() => setIsPortalOpen(!isPortalOpen)} className="relative py-2 text-[#00215E] hover:text-[#FAA300] transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#FFD700] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              PORTAL PPDB
            </button>
            {isPortalOpen && (
              <ul className="absolute bg-white shadow-xl mt-2 rounded-lg overflow-hidden z-50 text-sm text-left">
                <li><Link href="/portal-ppdb/link-pendaftaran" className="block px-4 py-2 hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">Link Pendaftaran</Link></li>
                <li>
                  <button onClick={() => setIsWebsiteOpen(!isWebsiteOpen)} className="w-full text-left px-4 py-2 hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">Website ▼</button>
                  {isWebsiteOpen && (
                    <ul className="bg-white ml-2 shadow-inner rounded-b-md">
                      <li><Link href="/website/sma" className="block px-4 py-2 hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">SMA</Link></li>
                      <li><Link href="/website/smk" className="block px-4 py-2 hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">SMK</Link></li>
                      <li><Link href="/website/smp" className="block px-4 py-2 hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">SMP</Link></li>
                    </ul>
                  )}
                </li>
                <li><Link href="/portal-ppdb/dana-investasi" className="block px-4 py-2 hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">Dana Investasi</Link></li>
                <li><Link href="/portal-ppdb/informasi-rekening" className="block px-4 py-2 hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">Informasi Rekening</Link></li>
              </ul>
            )}
          </li>

          {/* Dropdown Data Kunjungan */}
          <li className="relative">
            <button onClick={() => setIsKunjunganOpen(!isKunjunganOpen)} className="relative py-2 text-[#00215E] hover:text-[#FAA300] transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#FFD700] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              DATA KUNJUNGAN 
            </button>
            {isKunjunganOpen && (
              <ul className="absolute bg-white shadow-xl mt-2 rounded-lg overflow-hidden z-50 text-sm text-left">
                <li><Link href="/kunjungan/gabungan" className="block px-4 py-2 hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">Kunjungan Gabungan</Link></li>
                <li><Link href="/kunjungan/smk" className="block px-4 py-2 hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">Kunjungan SMK</Link></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-3 rounded-lg hover:bg-[#0B4C95]/20 transition-all duration-300 hover:shadow-md" aria-label="Toggle Menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-8 pb-6 bg-white backdrop-blur-lg shadow-inner">
          <ul className="space-y-4 font-extrabold text-lg">
            <li>
              <Link href="/" className="block py-4 px-6 rounded-xl text-[#00215E] hover:bg-[#0B4C95]/20 hover:text-[#FAA300] transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg" onClick={() => setIsOpen(false)}>
                Beranda
              </Link>
            </li>

            {/* Mobile Portal PPDB */}
            <li className="border-t pt-4">
              <button onClick={() => setMobilePortalOpen(!mobilePortalOpen)} className="w-full text-left text-[#00215E] hover:text-[#FAA300]">
                Portal PPDB {mobilePortalOpen ? '▲' : '▼'}
              </button>
              {mobilePortalOpen && (
                <ul className="mt-2 pl-4 space-y-2 text-base">
                  <li><Link href="/portal-ppdb/link-pendaftaran" onClick={() => setIsOpen(false)} className="block text-[#00215E] hover:text-[#FAA300]">Link Pendaftaran</Link></li>
                  <li>
                    <button onClick={() => setMobileWebsiteOpen(!mobileWebsiteOpen)} className="w-full text-left text-[#00215E] hover:text-[#FAA300]">Website {mobileWebsiteOpen ? '▲' : '▼'}</button>
                    {mobileWebsiteOpen && (
                      <ul className="ml-4 space-y-1">
                        <li><Link href="/website/sma" onClick={() => setIsOpen(false)} className="block text-[#00215E] hover:text-[#FAA300]">SMA</Link></li>
                        <li><Link href="/website/smk" onClick={() => setIsOpen(false)} className="block text-[#00215E] hover:text-[#FAA300]">SMK</Link></li>
                        <li><Link href="/website/smp" onClick={() => setIsOpen(false)} className="block text-[#00215E] hover:text-[#FAA300]">SMP</Link></li>
                      </ul>
                    )}
                  </li>
                  <li><Link href="/portal-ppdb/dana-investasi" onClick={() => setIsOpen(false)} className="block text-[#00215E] hover:text-[#FAA300]">Dana Investasi</Link></li>
                  <li><Link href="/portal-ppdb/informasi-rekening" onClick={() => setIsOpen(false)} className="block text-[#00215E] hover:text-[#FAA300]">Informasi Rekening</Link></li>
                </ul>
              )}
            </li>

            {/* Mobile Data Kunjungan */}
            <li className="border-t pt-4">
              <button onClick={() => setMobileKunjunganOpen(!mobileKunjunganOpen)} className="w-full text-left text-[#00215E] hover:text-[#FAA300]">
                Data Kunjungan {mobileKunjunganOpen ? '▲' : '▼'}
              </button>
              {mobileKunjunganOpen && (
                <ul className="mt-2 pl-4 space-y-2 text-base">
                  <li><Link href="/kunjungan/gabungan" onClick={() => setIsOpen(false)} className="block text-[#00215E] hover:text-[#FAA300]">Kunjungan Gabungan</Link></li>
                  <li><Link href="/kunjungan/smk" onClick={() => setIsOpen(false)} className="block text-[#00215E] hover:text-[#FAA300]">Kunjungan SMK</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
