import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* COMPACT AESTHETIC FRAME */}
        <div className="relative border-[1px] border-[#901C3C]/20 rounded-[2.5rem] p-8 md:p-10 bg-rose-50/20 backdrop-blur-sm">
          
          {/* Smaller Decorative Corners */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#901C3C]/40 rounded-tl-xl"></div>
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#901C3C]/40 rounded-br-xl"></div>

          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            
            {/* Left: Smaller Square Image */}
            <div className="w-full md:w-1/3 relative">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl border-[6px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=1000&auto=format&fit=crop"
                  alt="Rajesh - Lead Photographer"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <div className="absolute top-4 -left-4 w-full h-full border border-[#901C3C]/30 rounded-2xl -z-10"></div>
            </div>

            {/* Right: Compact Text Content */}
            <div className="w-full md:w-2/3 space-y-4">
              <div className="flex items-center gap-4">
                 <span className="text-[#901C3C] font-bold tracking-wider text-xs uppercase border-b border-[#901C3C] pb-0.5">About The Artist</span>
              </div>
              
              <h2 className="text-3xl font-serif font-bold text-gray-900 leading-tight">
                Hello, I am <span className="text-[#901C3C]">Rajesh.</span>
              </h2>
              
              <div className="p-4 bg-white/60 rounded-lg border-l-4 border-[#901C3C]">
                <p className="text-base text-gray-700 italic font-serif">
                  "freezing a moment that will never happen again."
                </p>
              </div>
              
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                With 8+ years of experience in Bengali and destination weddings, I strive to create visual legacies. My style is a blend of traditional elegance and modern storytelling.
              </p>

              {/* Stats Row */}
              <div className="flex gap-12 pt-4 border-t border-rose-200">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#901C3C]">150+</h3>
                  <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Weddings</p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#901C3C]">100%</h3>
                  <p className="text-gray-600 text-xs font-bold uppercase tracking-wide">Happy Clients</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}