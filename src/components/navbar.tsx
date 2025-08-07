'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isWebsiteOpen, setIsWebsiteOpen] = useState(false);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? '' : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-5">
          {/* Logo dan Nama Sekolah */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <Image
              src="/smk.png"
              alt="Logo Sekolah"
              width={60}
              height={60}
              className="transform transition-transform duration-300 group-hover:scale-110"
            />
            <h5 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-black text-center leading-tight">
              <span className="text-[#00215E]">PPDB</span>{' '}
              <span className="text-[#FAA300]">SMK INFORMATIKA PESAT</span>
            </h5>
          </div>

          {/* Tombol Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#00215E] hover:text-[#FAA300] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-10 items-center text-sm font-medium text-[#00215E]">
            {/* Dropdown Kunjungan */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('kunjungan')}
                className="py-2 hover:text-[#FAA300] transition-colors duration-300"
              >
                Data Kunjungan <FaChevronDown className="inline ml-1 text-xs" />
              </button>
              {openDropdown === 'kunjungan' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link href="/kunjungan/gabungan" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 hover:text-[#FAA300]">
                    Kunjungan Gabungan
                  </Link>
                  <Link href="/kunjungan/smk" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 hover:text-[#FAA300]">
                    Kunjungan SMK
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown Portal PPDB */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ppdb')}
                className="py-2 hover:text-[#FAA300] transition-colors duration-300"
              >
                Portal PPDB <FaChevronDown className="inline ml-1 text-xs" />
              </button>
              {openDropdown === 'ppdb' && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link href="/portal-ppdb/link-pendaftaran" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 hover:text-[#FAA300]">
                    Link Pendaftaran
                  </Link>

                  {/* Dropdown Website */}
                  <div className="relative group">
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-[#FAA300]/10 hover:text-[#FAA300] flex items-center justify-between">
                      Website
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>
                    <div className="hidden group-hover:block absolute left-full top-0 mt-0 w-44 bg-white rounded-md shadow-lg py-2 z-50">
                      <Link href="/portal-ppdb/website/smp" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 hover:text-[#FAA300]">
                        Website SMP
                      </Link>
                      <Link href="/portal-ppdb/website/sma" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 hover:text-[#FAA300]">
                        Website SMA
                      </Link>
                      <Link href="/portal-ppdb/website/smk" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 hover:text-[#FAA300]">
                        Website SMK
                      </Link>
                    </div>
                  </div>

                  <Link href="/portal-ppdb/dana-investasi" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 hover:text-[#FAA300]">
                    Dana Investasi
                  </Link>
                  <Link href="/portal-ppdb/pembayaran" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 hover:text-[#FAA300]">
                    Pembayaran
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Menu Mobile */}
        {mobileMenu && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/kunjungan/gabungan" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">
              Kunjungan Gabungan
            </Link>
            <Link href="/kunjungan/smk" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">
              Kunjungan SMK
            </Link>
            <Link href="/portal-ppdb/link-pendaftaran" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">
              Link Pendaftaran
            </Link>
            <Link href="/portal-ppdb/website/smp" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">
              Website SMP
            </Link>
            <Link href="/portal-ppdb/website/sma" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">
              Website SMA
            </Link>
            <Link href="/portal-ppdb/website/smk" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">
              Website SMK
            </Link>
            <Link href="/portal-ppdb/dana-investasi" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">
              Dana Investasi
            </Link>
            <Link href="/portal-ppdb/pembayaran" className="block px-4 py-2 text-sm hover:bg-[#FAA300]/10 text-[#00215E] hover:text-[#FAA300]">
              Pembayaran
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
