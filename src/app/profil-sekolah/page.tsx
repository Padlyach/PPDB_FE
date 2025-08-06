export default function ProfilSekolah() {
  return (
    <main className="min-h-screen py-10 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00215E] to-[#FAA300] hover:from-[#FAA300] hover:to-[#00215E] transition-all duration-500 mb-4">
            PROFIL SEKOLAH
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#00215E] to-[#FAA300] rounded-full mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              SMK Informatika Pesat adalah lembaga pendidikan kejuruan yang berfokus pada pengembangan kompetensi di bidang teknologi informasi dan komunikasi. Didirikan pada tahun 2005, sekolah kami telah berkomitmen untuk menghasilkan lulusan yang berkualitas dan siap bersaing di dunia kerja.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Visi kami adalah menjadi pusat unggulan pendidikan kejuruan teknologi informasi yang menghasilkan lulusan berkarakter, kompeten, dan berdaya saing global.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dengan dukungan tenaga pengajar profesional dan fasilitas modern, kami menyediakan program pembelajaran yang komprehensif dan relevan dengan kebutuhan industri.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img 
                src="/sekolah.webp" 
                alt="SMK Informatika Pesat"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl p-6 hover:shadow-[5px_5px_20px_#00215E] transition-all duration-500 transform hover:-translate-y-2 border-2 border-[#00215E]">


            <h3 className="text-xl font-bold text-[#00215E] mb-4 flex items-center">
              <svg className="w-8 h-8 mr-3 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              Nama Sekolah
            </h3>

            <p className="text-3xl font-black text-[#FAA300]">SMK Informatika Pesat</p>
          </div>


          <div className="bg-white rounded-2xl p-6 hover:shadow-[5px_5px_20px_#00215E] transition-all duration-500 transform hover:-translate-y-2 border-2 border-[#00215E]">


            <h3 className="text-xl font-bold text-[#00215E] mb-4 flex items-center">
              <svg className="w-8 h-8 mr-3 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
              NPSN
            </h3>
<p className="text-3xl font-black text-[#FAA300]">12345678</p>
          </div>


          <div className="bg-white rounded-2xl p-6 hover:shadow-[5px_5px_20px_#00215E] transition-all duration-500 transform hover:-translate-y-2 border-2 border-[#00215E]">


            <h3 className="text-xl font-bold text-[#00215E] mb-4 flex items-center">
              <svg className="w-8 h-8 mr-3 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Alamat
            </h3>


            <p className="text-2xl font-bold bg-gradient-to-r from-[#00215E] to-[#FAA300] bg-clip-text text-transparent mb-3">Jl. SelaKopi</p>
            <span className="inline-block px-4 py-2 bg-[#FAA300] text-white rounded-full text-sm font-bold shadow-lg hover:shadow-[0_0_10px_#FAA300] transition-all duration-300">Jakarta Selatan</span>
          </div>


          <div className="bg-white rounded-2xl p-6 hover:shadow-[5px_5px_20px_#00215E] transition-all duration-500 transform hover:-translate-y-2 border-2 border-[#00215E]">


            <h3 className="text-xl font-bold text-[#00215E] mb-4 flex items-center">
              <svg className="w-8 h-8 mr-3 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Status
            </h3>


            <p className="text-2xl font-bold text-[#00215E] mb-3">Swasta</p>
            <span className="inline-block px-4 py-2 bg-[#FAA300] text-white rounded-full text-sm font-bold shadow-lg hover:shadow-[0_0_10px_#FAA300] transition-all duration-300">Aktif</span>
          </div>


          <div className="bg-white rounded-2xl p-6 hover:shadow-[5px_5px_20px_#00215E] transition-all duration-500 transform hover:-translate-y-2 border-2 border-[#00215E]">


            <h3 className="text-xl font-bold text-[#00215E] mb-4 flex items-center">
              <svg className="w-8 h-8 mr-3 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
              Akreditasi
            </h3>
            <div className="flex items-center space-x-4">


              <span className="text-4xl font-black text-[#00215E] animate-pulse">A</span>
              <span className="px-4 py-2 bg-[#FAA300] text-white rounded-full text-sm font-bold shadow-lg hover:shadow-[0_0_10px_#FAA300] transition-all duration-300 transform hover:scale-105">
                Terakreditasi Unggul
              </span>
            </div>
          </div>


          <div className="bg-white rounded-2xl p-6 hover:shadow-[5px_5px_20px_#00215E] transition-all duration-500 transform hover:-translate-y-2 border-2 border-[#00215E]">


            <h3 className="text-xl font-bold text-[#00215E] mb-4 flex items-center">
              <svg className="w-8 h-8 mr-3 text-[#00215E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
              Fasilitas
            </h3>
            <div className="grid grid-cols-2 gap-3 mt-4">




              <span className="px-3 py-2 bg-[#FAA300] text-white rounded-lg text-xs font-bold text-center shadow-lg hover:shadow-[0_0_10px_#FAA300] transition-all duration-300 transform hover:scale-105">Lab Komputer</span>
              <span className="px-3 py-2 bg-[#FAA300] text-white rounded-lg text-xs font-bold text-center shadow-lg hover:shadow-[0_0_10px_#FAA300] transition-all duration-300 transform hover:scale-105">Perpustakaan</span>
              <span className="px-3 py-2 bg-[#FAA300] text-white rounded-lg text-xs font-bold text-center shadow-lg hover:shadow-[0_0_10px_#FAA300] transition-all duration-300 transform hover:scale-105">WiFi</span>
              <span className="px-3 py-2 bg-[#FAA300] text-white rounded-lg text-xs font-bold text-center shadow-lg hover:shadow-[0_0_10px_#FAA300] transition-all duration-300 transform hover:scale-105">Kantin</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}