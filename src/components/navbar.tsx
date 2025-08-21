'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isWebsiteOpen, setIsWebsiteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsPortalOpen(false);
        setIsWebsiteOpen(false);
      }
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={`bg-white backdrop-blur-xl border-b border-blue-300/30 sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'shadow-2xl shadow-blue-500/20 py-2'
          : 'shadow-lg shadow-blue-500/10 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative p-2 transition-all duration-500 transform hover:scale-105">
              <Image
                src="/smk.png"
                alt="Logo SMK PESAT"
                width={90}
                height={90}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href="/"
              className="group px-6 py-3 rounded-2xl text-black hover:text-white font-bold transition-all duration-500 relative overflow-hidden flex items-center space-x-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
              <span className="relative flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>BERANDA</span>
              </span>
            </Link>

            {/* Dropdown Portal PPDB */}
            <div className="relative dropdown-container">
              <button
                onClick={() => {
                  setIsPortalOpen(!isPortalOpen);
                  setIsWebsiteOpen(false);
                }}
                className="group px-6 py-3 rounded-2xl text-black hover:text-white font-bold transition-all duration-500 relative overflow-hidden flex items-center space-x-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl pointer-events-none"></div>
                <span className="relative flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>PORTAL PPDB</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-500 ${
                      isPortalOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {isPortalOpen && (
                <div className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/20 rounded-3xl border border-blue-200/50 overflow-hidden z-50 transform animate-in slide-in-from-top-2 duration-300">
                  <div className="p-3 space-y-1">
                    <Link
                      href="/portal-ppdb/link-pendaftaran"
                      className="group flex items-center px-4 py-4 text-blue-800 hover:text-white rounded-2xl transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl"></div>
                      <span className="relative flex items-center space-x-3 font-semibold">
                        <span className="text-2xl">📝</span>
                        <span>Link Pendaftaran</span>
                      </span>
                    </Link>

                    {/* Website Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setIsWebsiteOpen(!isWebsiteOpen)}
                        className="group w-full flex items-center justify-between px-4 py-4 text-blue-800 hover:text-white rounded-2xl transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl"></div>
                        <span className="relative flex items-center space-x-3 font-semibold">
                          <span className="text-2xl">🌐</span>
                          <span>Website Sekolah</span>
                        </span>
                        <svg
                          className={`relative w-4 h-4 transition-transform duration-300 ${
                            isWebsiteOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isWebsiteOpen && (
                        <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                          <Link
                            href="https://smapesat.sch.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center px-4 py-3 text-blue-700 hover:text-white rounded-xl transition-all duration-300 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                            <span className="relative flex items-center space-x-3 font-medium">
                              <span className="text-xl">🎓</span>
                              <div>
                                <div className="font-semibold">SMA PESAT</div>
                                <div className="text-xs opacity-70">
                                  Sekolah Menengah Atas
                                </div>
                              </div>
                            </span>
                          </Link>

                          <Link
                            href="https://smkpesat.sch.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center px-4 py-3 text-blue-700 hover:text-white rounded-xl transition-all duration-300 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                            <span className="relative flex items-center space-x-3 font-medium">
                              <span className="text-xl">🔧</span>
                              <div>
                                <div className="font-semibold">SMK PESAT</div>
                                <div className="text-xs opacity-70">
                                  Sekolah Menengah Kejuruan
                                </div>
                              </div>
                            </span>
                          </Link>

                          <Link
                            href="https://smppesat.sch.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center px-4 py-3 text-blue-700 hover:text-white rounded-xl transition-all duration-300 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                            <span className="relative flex items-center space-x-3 font-medium">
                              <span className="text-xl">📚</span>
                              <div>
                                <div className="font-semibold">SMP PESAT</div>
                                <div className="text-xs opacity-70">
                                  Sekolah Menengah Pertama
                                </div>
                              </div>
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      href="/portal-ppdb/dana-investasi"
                      className="group flex items-center px-4 py-4 text-blue-800 hover:text-white rounded-2xl transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl"></div>
                      <span className="relative flex items-center space-x-3 font-semibold">
                        <span className="text-2xl">💰</span>
                        <span>Dana Investasi</span>
                      </span>
                    </Link>

                    <Link
                      href="/portal-ppdb/informasi-rekening"
                      className="group flex items-center px-4 py-4 text-blue-800 hover:text-white rounded-2xl transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl"></div>
                      <span className="relative flex items-center space-x-3 font-semibold">
                        <span className="text-2xl">🏦</span>
                        <span>Informasi Rekening</span>
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-lg hover:bg-[#0B4C95]/20 transition-all duration-300 hover:shadow-md"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-8 pb-6 bg-white backdrop-blur-lg shadow-inner">
            <ul className="space-y-4 font-extrabold text-lg">
              <li>
                <Link
                  href="/"
                  className="block py-4 px-6 rounded-xl text-[#00215E] hover:bg-[#0B4C95]/20 hover:text-[#FAA300] transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Beranda
                </Link>
              </li>

              {/* Mobile Portal PPDB */}
              <li className="border-t pt-4">
                <span className="block text-[#00215E]">Portal PPDB</span>
                <ul className="mt-2 pl-4 space-y-2 text-base">
                  <li>
                    <Link
                      href="/link-pendaftaran"
                      onClick={() => setIsOpen(false)}
                      className="block text-[#00215E] hover:text-[#FAA300]"
                    >
                      Link Pendaftaran
                    </Link>
                  </li>
                  <li>
                    <span className="block text-[#00215E]">Website</span>
                    <ul className="ml-4 space-y-1">
                      <li>
                        <Link
                          href="/website/sma"
                          onClick={() => setIsOpen(false)}
                          className="block text-[#00215E] hover:text-[#FAA300]"
                        >
                          SMA
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/website/smk"
                          onClick={() => setIsOpen(false)}
                          className="block text-[#00215E] hover:text-[#FAA300]"
                        >
                          SMK
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/website/smp"
                          onClick={() => setIsOpen(false)}
                          className="block text-[#00215E] hover:text-[#FAA300]"
                        >
                          SMP
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      href="/dana-investasi"
                      onClick={() => setIsOpen(false)}
                      className="block text-[#00215E] hover:text-[#FAA300]"
                    >
                      Dana Investasi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/info-rekening"
                      onClick={() => setIsOpen(false)}
                      className="block text-[#00215E] hover:text-[#FAA300]"
                    >
                      Informasi Rekening
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Mobile Data Kunjungan */}
              <li className="border-t pt-4">
                <span className="block text-[#00215E]">Data Kunjungan</span>
                <ul className="mt-2 pl-4 space-y-2 text-base">
                  <li>
                    <Link
                      href="/kunjungan/gabungan"
                      onClick={() => setIsOpen(false)}
                      className="block text-[#00215E] hover:text-[#FAA300]"
                    >
                      Kunjungan Gabungan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kunjungan/smk"
                      onClick={() => setIsOpen(false)}
                      className="block text-[#00215E] hover:text-[#FAA300]"
                    >
                      Kunjungan SMK
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
