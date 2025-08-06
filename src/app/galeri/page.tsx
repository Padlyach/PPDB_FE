import Image from 'next/image';

export default function Galeri() {
  return (
    <main className="min-h-screen py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

         <div className="flex flex-col items-center mb-12">

          <h2 className="text-4xl md:text-5xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00215E] to-[#FAA300] hover:from-[#FAA300] hover:to-[#00215E] transition-all duration-300 ease-in-out mb-4">
            GALERI SEKOLAH
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#00215E] to-[#FAA300] rounded-full mt-4"></div>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              <Image 
                src="/pp.png" 
                alt="Kegiatan 1" 
                width={400} 
                height={300} 

                className="rounded-xl object-cover w-full h-[300px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#00215E]/30 shadow-[0_0_15px_rgba(0,33,94,0.5)]" 
              />


              <Image 
                 src="/kk.png" 
                alt="Kegiatan 2" 
                width={400} 
                height={300} 

                className="rounded-xl object-cover w-full h-[300px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#00215E]/30 shadow-[0_0_15px_rgba(0,33,94,0.5)]" 
              />


              <Image 
                  src="/jj.png" 
                alt="Kegiatan 3" 
                width={400} 
                height={300} 

                className="rounded-xl object-cover w-full h-[300px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#00215E]/30 shadow-[0_0_15px_rgba(0,33,94,0.5)]" 
              />

          </div>

      </div>
    </main>
  );
}
