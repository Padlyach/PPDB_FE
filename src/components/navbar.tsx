'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? '' : menu);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo dan Judul */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h5 className="text-lg sm:text-xl md:text-3xl font-black text-center">
            SMK INFORMATIKA PESAT
          </h5>
        </div>

        {/* Tombol Hamburger Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <div className="relative">
            <button
              onClick={() => toggleDropdown('kunjungan')}
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600"
            >
              Data Kunjungan <FaChevronDown className="text-xs" />
            </button>
            {openDropdown === 'kunjungan' && (
              <div className="absolute bg-white shadow-md mt-2 rounded p-2 z-10">
                <Link href="/kunjunganGabungan" className="block px-4 py-2 hover:bg-gray-100">Kunjungan Gabungan</Link>
                <Link href="/kunjunganSmk" className="block px-4 py-2 hover:bg-gray-100">Kunjungan SMK</Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown('portal')}
              className="flex items-center gap-1 text-gray-800 hover:text-blue-600"
            >
              Portal PPDB <FaChevronDown className="text-xs" />
            </button>
            {openDropdown === 'portal' && (
              <div className="absolute bg-white shadow-md mt-2 rounded p-2 z-10">
                <Link href="/pendaftaran" className="block px-4 py-2 hover:bg-gray-100">Link Pendaftaran</Link>
                <Link href="/website" className="block px-4 py-2 hover:bg-gray-100">Website</Link>
                <Link href="/investasi" className="block px-4 py-2 hover:bg-gray-100">Dana Investasi</Link>
                <Link href="/pembayaran" className="block px-4 py-2 hover:bg-gray-100">Pembayaran</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      {mobileMenu && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <div className="py-2">
            <details className="mb-2">
              <summary className="cursor-pointer text-gray-800 font-medium">Data Kunjungan</summary>
              <div className="pl-4 mt-1">
                <Link href="/kunjunganGabungan" onClick={() => setMobileMenu(false)} className="block py-1 text-gray-700">Kunjungan Gabungan</Link>
                <Link href="/kunjunganSmk" onClick={() => setMobileMenu(false)} className="block py-1 text-gray-700">Kunjungan SMK</Link>
              </div>
            </details>

            <details>
              <summary className="cursor-pointer text-gray-800 font-medium">Portal PPDB</summary>
              <div className="pl-4 mt-1">
                <Link href="/pendaftaran" onClick={() => setMobileMenu(false)} className="block py-1 text-gray-700">Link Pendaftaran</Link>
                <Link href="/website" onClick={() => setMobileMenu(false)} className="block py-1 text-gray-700">Website</Link>
                <Link href="/investasi" onClick={() => setMobileMenu(false)} className="block py-1 text-gray-700">Dana Investasi</Link>
                <Link href="/pembayaran" onClick={() => setMobileMenu(false)} className="block py-1 text-gray-700">Pembayaran</Link>
              </div>
            </details>
          </div>
        </div>
      )}
    </header>
  );
}
