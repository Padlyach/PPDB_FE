import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="max-w-6xl mx-auto text-center space-y-8 relative mt-27">
          <h2 className="text-6xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00215E] to-[#FAA300] hover:from-[#FAA300] hover:to-[#00215E] transition-all duration-300">
            SELAMAT DATANG DI SMK INFORMATIKA PESAT
          </h2>
        
          <p className="text-lg md:text-xl text-[#00215E] max-w-3xl mx-auto">
            Membentuk Generasi Unggul dalam Teknologi dan Karakter
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#00215E] to-[#FAA300] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Daftar Sekarang
            </button>
            <button className="bg-white text-[#00215E] border-2 border-[#00215E] px-8 py-4 rounded-full font-semibold hover:bg-[#FAA300]/10 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-[#00215E] mb-12">Keunggulan Kami</h3>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all shadow-[#00215E]/50 hover:shadow-[#00215E]">
              <div className="w-16 h-16 bg-[#00215E]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4  text-[#00215E]">Fasilitas Modern</h4>
              <p className="text-gray-600">Dilengkapi dengan laboratorium komputer terkini dan infrastruktur pembelajaran digital</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all shadow-[#00215E]/50 hover:shadow-[#00215E]">
              <div className="w-16 h-16 bg-[#00215E]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4  text-[#00215E]">Kurikulum Industri</h4>
              <p className="text-gray-600">Dirancang bersama praktisi industri untuk memenuhi kebutuhan dunia kerja</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all shadow-[#00215E]/50 hover:shadow-[#00215E]">
              <div className="w-16 h-16 bg-[#00215E]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4  text-[#00215E]">Peluang Karir</h4>
              <p className="text-gray-600">Kerjasama dengan berbagai perusahaan untuk program magang dan rekrutmen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Sekolah */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-center text-[#00215E] mb-12">Tentang SMK Informatika Pesat</h3>
              <div className="w-20 h-1 bg-[#00215E]"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                SMK Informatika Pesat adalah lembaga pendidikan kejuruan unggulan yang berfokus pada pengembangan kompetensi di bidang teknologi informasi. Dengan pengalaman lebih dari 15 tahun, kami telah meluluskan ribuan siswa yang kini berkarir sukses di berbagai perusahaan teknologi terkemuka.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-3xl font-bold text-[#00215E]">1500+</h4>
                  <p className="text-gray-600">Alumni Sukses</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-3xl font-bold text-[#00215E]">50+</h4>
                  <p className="text-gray-600">Mitra Industri</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/sekolah.webp"
                alt="Gedung SMK PESAT"
                fill
                className="object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Keahlian */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
           <h3 className="text-3xl md:text-4xl font-bold text-center text-[#00215E] mb-12">Program Keahlian</h3>
          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gradient-to-br from-[#00215E]/5 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all shadow-[#00215E]/50 hover:shadow-[#00215E]">
              <h4 className="text-xl font-bold mb-4 text-[#00215E]">Rekayasa Perangkat Lunak</h4>
              <p className="text-gray-700 mb-6">Pembelajaran fokus pada pengembangan aplikasi, pemrograman, dan manajemen basis data</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Web Development</li>
                <li>• Mobile App Development</li>
                <li>• Database Management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00215E]/5 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all shadow-[#00215E]/50 hover:shadow-[#00215E]">
              <h4 className="text-xl font-bold mb-4 text-[#00215E]">Teknik Komputer dan Jaringan</h4>
              <p className="text-gray-700 mb-6">Mempelajari infrastruktur jaringan, keamanan sistem, dan administrasi server</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Network Administration</li>
                <li>• Cyber Security</li>
                <li>• Cloud Computing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00215E]/5 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all shadow-[#00215E]/50 hover:shadow-[#00215E]">
              <h4 className="text-xl font-bold mb-4 text-[#00215E]">Multimedia</h4>
              <p className="text-gray-700 mb-6">Pengembangan konten digital, desain grafis, dan produksi multimedia</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Graphic Design</li>
                <li>• Video Production</li>
                <li>• 3D Animation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prestasi */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
         <h3 className="text-3xl md:text-4xl font-bold text-center text-[#00215E] mb-12">Prestasi Sekolah</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-[#00215E] transition-all text-center border-2 border-[#00215E]">
              <h4 className="text-2xl font-bold text-[#00215E] mb-2">Juara 1</h4>
              <p className="text-gray-700">Lomba Web Design Tingkat Nasional 2023</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-[#00215E] transition-all text-center border-2 border-[#00215E]">
              <h4 className="text-2xl font-bold text-[#00215E] mb-2">Juara 2</h4>
              <p className="text-gray-700">Olimpiade Informatika Provinsi 2023</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-[#00215E] transition-all text-center border-2 border-[#00215E]">
              <h4 className="text-2xl font-bold text-[#00215E] mb-2">Best Innovation</h4>
              <p className="text-gray-700">IT Competition 2023</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-[#00215E] transition-all text-center border-2 border-[#00215E]">
              <h4 className="text-2xl font-bold text-[#00215E] mb-2">Juara Umum</h4>
              <p className="text-gray-700">Festival Teknologi 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
  <h3 className="text-3xl md:text-4xl font-bold text-center text-[#00215E] mb-12">Apa Kata Alumni</h3>       
          <div className="grid md:grid-cols-3 gap-8">




            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all shadow-[#00215E]/50 hover:shadow-[#00215E]">
              <div className="flex flex-col items-center text-center mb-6">
                <img src="/salman.JPG" alt="Ahmad Rizki" className="w-20 h-20 rounded-full mb-4 object-cover" />
                <div>


                  <h5 className="font-bold text-xl mb-1 text-[#00215E]">Salman</h5>
                  <p className="text-gray-500 text-lg">Software Engineer at Google</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Pendidikan di SMK PESAT memberi saya fondasi yang kuat untuk berkarir di industri IT."</p>
            </div>




            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all shadow-[#00215E]/50 hover:shadow-[#00215E]">
              <div className="flex flex-col items-center text-center mb-6">
                <img src="/wildan.JPG" alt="Sarah Putri" className="w-20 h-20 rounded-full mb-4 object-cover" />
                <div>


                  <h5 className="font-bold text-xl mb-1 text-[#00215E]">Wildan</h5>
                  <p className="text-gray-500 text-lg">UI/UX Designer at Tokopedia</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Fasilitas modern dan pengajar yang kompeten membuat proses belajar menjadi menyenangkan."</p>
            </div>




            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all shadow-[#00215E]/50 hover:shadow-[#00215E]">
              <div className="flex flex-col items-center text-center mb-6">
                <img src="/badak.JPG" alt="Budi Santoso" className="w-20 h-20 rounded-full mb-4 object-cover" />
                <div>


                  <h5 className="font-bold text-xl mb-1 text-[#00215E]">Nugraha</h5>
                  <p className="text-gray-500 text-lg">Network Engineer at Telkom</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Program magang membantu saya mendapatkan pekerjaan impian setelah lulus."</p>
            </div>
          </div>
        </div>
        </section>

      {/* Kontak */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
         <h3 className="text-3xl md:text-4xl font-bold text-center text-[#00215E] mb-12">Hubungi Kami</h3>    
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <button className="flex items-center space-x-4 bg-white p-4 rounded-lg hover:bg-[#00215E]/10 transition duration-300 w-full">
                <div className="w-10 h-10 bg-[#00215E]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">Alamat</h4>
                  <p className="text-sm text-gray-600">Jl. Pendidikan No. 123, Jakarta Selatan, 12345</p>
                </div>
              </button>

              <button className="flex items-center space-x-4 bg-white p-4 rounded-lg hover:bg-[#00215E]/10 transition duration-300 w-full">
                <div className="w-10 h-10 bg-[#00215E]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">Email</h4>
                  <p className="text-sm text-gray-600">info@smkpesat.sch.id</p>
                </div>
              </button>

              <button className="flex items-center space-x-4 bg-white p-4 rounded-lg hover:bg-[#00215E]/10 transition duration-300 w-full">
                <div className="w-10 h-10 bg-[#00215E]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">Telepon</h4>
                  <p className="text-sm text-gray-600">(021) 123-4567</p>
                </div>
              </button>

              <button className="flex items-center space-x-4 bg-white p-4 rounded-lg hover:bg-[#00215E]/10 transition duration-300 w-full">
                <div className="w-10 h-10 bg-[#00215E]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a2 2 0 002-2V6.5a2 2 0 00-2-2h-11a2 2 0 00-2 2v11a2 2 0 002 2z"></path>
                  </svg>
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">Instagram</h4>
                  <p className="text-sm text-gray-600">@smkpesat</p>
                </div>
              </button>
            </div>


            <div className="bg-white rounded-xl shadow-xl p-4 order-first md:order-last">
              <h4 className="text-xl font-bold mb-4 text-gray-800">Kirim Pesan</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>


                    <label className="block text-gray-700 text-sm font-semibold mb-1">Nama Lengkap</label>
                    <input type="text" className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00215E] focus:border-transparent" placeholder="Nama lengkap"/>
                  </div>
                  <div>


                    <label className="block text-gray-700 text-sm font-semibold mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00215E] focus:border-transparent" placeholder="Email"/>
                  </div>
                </div>
                <div>


                  <label className="block text-gray-700 text-sm font-semibold mb-1">Subjek</label>
                  <input type="text" className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00215E] focus:border-transparent" placeholder="Subjek"/>
                </div>
                <div>


                  <label className="block text-gray-700 text-sm font-semibold mb-1">Pesan</label>
                  <textarea className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00215E] focus:border-transparent h-20" placeholder="Pesan"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#00215E] text-white py-1.5 px-4 rounded-lg hover:bg-[#00215E]/90 transition duration-300 text-sm font-semibold">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>)}