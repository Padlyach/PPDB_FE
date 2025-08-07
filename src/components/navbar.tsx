'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa6';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isWebsiteOpen, setIsWebsiteOpen] = useState(false);
  const [isKunjunganOpen, setIsKunjunganOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePortalOpen, setMobilePortalOpen] = useState(false);
  const [mobileWebsiteOpen, setMobileWebsiteOpen] = useState(false);
  const [mobileKunjunganOpen, setMobileKunjunganOpen] = useState(false);

  return (
    <header className="bg-white w-full fixed top-0 left-0 shadow z-50">
      <div className="flex items-center justify-between px-4 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/img/logoPesat.png" alt="Logo" width={50} height={50} />
          <h5 className="text-lg sm:text-xl md:text-3xl font-black text-center">
            SMK INFORMATIKA PESAT
          </h5>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 font-semibold text-sm relative">
          {/* Data Kunjungan */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-[#FAA300] transition-all duration-300"
              onClick={() => setIsKunjunganOpen(!isKunjunganOpen)}
            >
              Data Kunjungan <FaChevronDown className="text-xs mt-1" />
            </button>
            {isKunjunganOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md py-2 px-4 z-50 w-56">
                <Link href="/kunjunganGabungan" className="block py-1 hover:text-[#FAA300]">Kunjungan Gabungan</Link>
                <Link href="/kunjunganSmk" className="block py-1 hover:text-[#FAA300]">Kunjungan SMK</Link>
              </div>
            )}
          </div>

          {/* Portal PPDB */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-[#FAA300] transition-all duration-300"
              onClick={() => setIsPortalOpen(!isPortalOpen)}
            >
              Portal PPDB <FaChevronDown className="text-xs mt-1" />
            </button>
            {isPortalOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md py-2 px-4 z-50 w-56">
                <Link href="/linkPendaftaran" className="block py-1 hover:text-[#FAA300]">Link Pendaftaran</Link>
                <Link href="/danaInvestasi" className="block py-1 hover:text-[#FAA300]">Dana Investasi</Link>
                <Link href="/pembayaran" className="block py-1 hover:text-[#FAA300]">Pembayaran</Link>
              </div>
            )}
          </div>

          {/* Website */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-[#FAA300] transition-all duration-300"
              onClick={() => setIsWebsiteOpen(!isWebsiteOpen)}
            >
              Website <FaChevronDown className="text-xs mt-1" />
            </button>
            {isWebsiteOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md py-2 px-4 z-50 w-56">
                <Link href="/smp" className="block py-1 hover:text-[#FAA300]">Website SMP</Link>
                <Link href="/sma" className="block py-1 hover:text-[#FAA300]">Website SMA</Link>
                <Link href="/smk" className="block py-1 hover:text-[#FAA300]">Website SMK</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <Image src="/img/menu.svg" alt="Menu" width={25} height={25} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-4 pb-6 text-sm text-gray-800 font-medium">
          <div className="border-t py-4">
            {/* Data Kunjungan */}
            <div className="mb-3">
              <button
                className="flex items-center gap-2 w-full text-left"
                onClick={() => setMobileKunjunganOpen(!mobileKunjunganOpen)}
              >
                Data Kunjungan <FaChevronDown className="text-xs mt-1" />
              </button>
              {mobileKunjunganOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/kunjunganGabungan" className="block hover:text-[#FAA300]">Kunjungan Gabungan</Link>
                  <Link href="/kunjunganSmk" className="block hover:text-[#FAA300]">Kunjungan SMK</Link>
                </div>
              )}
            </div>

            {/* Portal PPDB */}
            <div className="mb-3">
              <button
                className="flex items-center gap-2 w-full text-left"
                onClick={() => setMobilePortalOpen(!mobilePortalOpen)}
              >
                Portal PPDB <FaChevronDown className="text-xs mt-1" />
              </button>
              {mobilePortalOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/linkPendaftaran" className="block hover:text-[#FAA300]">Link Pendaftaran</Link>
                  <Link href="/danaInvestasi" className="block hover:text-[#FAA300]">Dana Investasi</Link>
                  <Link href="/pembayaran" className="block hover:text-[#FAA300]">Pembayaran</Link>
                </div>
              )}
            </div>

            {/* Website */}
            <div className="mb-3">
              <button
                className="flex items-center gap-2 w-full text-left"
                onClick={() => setMobileWebsiteOpen(!mobileWebsiteOpen)}
              >
                Website <FaChevronDown className="text-xs mt-1" />
              </button>
              {mobileWebsiteOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/smp" className="block hover:text-[#FAA300]">Website SMP</Link>
                  <Link href="/sma" className="block hover:text-[#FAA300]">Website SMA</Link>
                  <Link href="/smk" className="block hover:text-[#FAA300]">Website SMK</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
