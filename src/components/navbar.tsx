'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isWebsiteOpen, setIsWebsiteOpen] = useState(false);
  const [isMobileWebsiteOpen, setIsMobileWebsiteOpen] = useState(false);
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
    const handleOutsideClick = (event) => {
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
    <nav className={`bg-gradient-to-r from-[#1e3a8a] via-[#1e40af] to-[#2563eb] backdrop-blur-xl border-b border-blue-300/30 sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'shadow-2xl shadow-blue-500/20 py-2' : 'shadow-lg shadow-blue-500/10 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo dan Nama Sekolah */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
              <Image 
                src="/smk.png" 
                alt="Logo SMK PESAT" 
                width={52} 
                height={52} 
                className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg" 
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-3xl font-black tracking-tight">
                <span className="text-white group-hover:text-yellow-200 transition-all duration-500 drop-shadow-lg">PPDB</span>{' '}
                <span className="text-yellow-300 group-hover:text-yellow-100 transition-all duration-500 drop-shadow-lg">SMK PESAT</span>
              </h1>
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 transition-all duration-700 rounded-full"></div>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-black">
                <span className="text-white drop-shadow-lg">PPDB</span>{' '}
                <span className="text-yellow-300 drop-shadow-lg">SMK</span>
              </h1>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link 
              href="/" 
              className="group px-6 py-3 rounded-2xl text-white hover:text-blue-100 font-bold transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
              <span className="relative flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
                className="group px-6 py-3 rounded-2xl text-white hover:text-yellow-100 font-bold transition-all duration-500 relative overflow-hidden flex items-center space-x-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                <span className="relative flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>PORTAL PPDB</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-500 ${isPortalOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                    
                    {/* Website Dropdown di dalam Portal PPDB */}
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
                          className={`relative w-4 h-4 transition-transform duration-300 ${isWebsiteOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                                <div className="text-xs opacity-70">Sekolah Menengah Atas</div>
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
                                <div className="text-xs opacity-70">Sekolah Menengah Kejuruan</div>
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
                                <div className="text-xs opacity-70">Sekolah Menengah Pertama</div>
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
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-3 rounded-2xl hover:bg-white/10 transition-all duration-300 relative group backdrop-blur-sm"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute h-0.5 w-6 bg-white transition-all duration-500 ${
                  isOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute h-0.5 w-6 bg-yellow-300 transition-all duration-500 top-3 ${
                  isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                <span className={`absolute h-0.5 w-6 bg-white transition-all duration-500 ${
                  isOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-black/30 backdrop-blur-md z-40">
          <div className="bg-gradient-to-br from-blue-600/95 via-blue-700/95 to-blue-800/95 backdrop-blur-xl shadow-2xl border-t border-blue-300/30 max-h-screen overflow-y-auto">
            <div className="px-6 py-8 space-y-4">
              <Link 
                href="/" 
                className="group flex items-center px-6 py-4 rounded-2xl text-white hover:text-blue-100 transition-all duration-500 font-bold relative overflow-hidden"
                onClick={() => setIsOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                <span className="relative flex items-center space-x-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Beranda</span>
                </span>
              </Link>

              {/* Mobile Portal PPDB */}
              <div className="space-y-3">
                <div className="px-6 py-3 text-yellow-200 font-black text-lg uppercase tracking-wider border-b-2 border-yellow-300/50">
                  🏢 Portal PPDB
                </div>
                
                <Link 
                  href="/portal-ppdb/link-pendaftaran" 
                  className="group flex items-center px-6 py-4 rounded-2xl text-white hover:text-blue-100 transition-all duration-500 font-semibold relative overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                  <span className="relative flex items-center space-x-4">
                    <span className="text-2xl">📝</span>
                    <span>Link Pendaftaran</span>
                  </span>
                </Link>
                
                {/* Mobile Website Dropdown */}
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsMobileWebsiteOpen(!isMobileWebsiteOpen)}
                    className="flex items-center justify-between w-full px-6 py-4 text-white hover:text-yellow-100 font-semibold transition-all duration-300"
                  >
                    <span className="flex items-center space-x-4">
                      <span className="text-2xl">🌐</span>
                      <span>Website Sekolah</span>
                    </span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-500 ${isMobileWebsiteOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isMobileWebsiteOpen && (
                    <div className="space-y-2 pl-8 animate-in slide-in-from-top-2 duration-300">
                      <Link 
                        href="https://smapesat.sch.id/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center px-6 py-3 rounded-2xl text-white hover:text-blue-100 transition-all duration-500 font-medium relative overflow-hidden"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                        <span className="relative flex items-center space-x-4">
                          <span className="text-xl">🎓</span>
                          <div>
                            <div className="font-semibold">SMA PESAT</div>
                            <div className="text-sm opacity-70">Sekolah Menengah Atas</div>
                          </div>
                        </span>
                      </Link>
                      
                      <Link 
                        href="https://smkpesat.sch.id/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center px-6 py-3 rounded-2xl text-white hover:text-blue-100 transition-all duration-500 font-medium relative overflow-hidden"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                        <span className="relative flex items-center space-x-4">
                          <span className="text-xl">🔧</span>
                          <div>
                            <div className="font-semibold">SMK PESAT</div>
                            <div className="text-sm opacity-70">Sekolah Menengah Kejuruan</div>
                          </div>
                        </span>
                      </Link>
                      
                      <Link 
                        href="https://smppesat.sch.id/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center px-6 py-3 rounded-2xl text-white hover:text-blue-100 transition-all duration-500 font-medium relative overflow-hidden"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-teal-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                        <span className="relative flex items-center space-x-4">
                          <span className="text-xl">📚</span>
                          <div>
                            <div className="font-semibold">SMP PESAT</div>
                            <div className="text-sm opacity-70">Sekolah Menengah Pertama</div>
                          </div>
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link 
                  href="/portal-ppdb/dana-investasi" 
                  className="group flex items-center px-6 py-4 rounded-2xl text-white hover:text-blue-100 transition-all duration-500 font-semibold relative overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                  <span className="relative flex items-center space-x-4">
                    <span className="text-2xl">💰</span>
                    <span>Dana Investasi</span>
                  </span>
                </Link>
                
                <Link 
                  href="/portal-ppdb/informasi-rekening" 
                  className="group flex items-center px-6 py-4 rounded-2xl text-white hover:text-blue-100 transition-all duration-500 font-semibold relative overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                  <span className="relative flex items-center space-x-4">
                    <span className="text-2xl">🏦</span>
                    <span>Informasi Rekening</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
