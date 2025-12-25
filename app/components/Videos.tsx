export default function Videos() {
  return (
    <section id="videos" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* AESTHETIC FRAME WRAPPER */}
        <div className="relative border-[1px] border-[#901C3C]/20 rounded-[3rem] p-8 md:p-16 bg-white shadow-sm">
          
          {/* Decorative Corners */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#901C3C]/40 rounded-tl-2xl"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#901C3C]/40 rounded-br-2xl"></div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#901C3C] mb-4">Cinematic Films</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Relive the emotions, the vows, and the celebration in motion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Video Card 1 */}
            <div className="p-4 rounded-3xl border border-rose-100 bg-rose-50/10 hover:border-[#901C3C]/50 transition duration-500 hover:shadow-lg group">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-inner relative bg-black">
                {/* LOCAL VIDEO PLAYER */}
                <video 
                  className="w-full h-full object-cover" 
                  controls 
                  preload="metadata"
                  poster="/images/poster1.jpg" // Optional: You can add a cover image later
                >
                  {/* Make sure your file name matches exactly! */}
                  <source src="/videos/wedding1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-[#901C3C] transition">Riya & Arjun</h3>
                <p className="text-gray-500 font-medium text-sm uppercase tracking-wide mt-2">The Royal Jaipur Wedding</p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="p-4 rounded-3xl border border-rose-100 bg-rose-50/10 hover:border-[#901C3C]/50 transition duration-500 hover:shadow-lg group">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-inner relative bg-black">
                {/* LOCAL VIDEO PLAYER */}
                <video 
                  className="w-full h-full object-cover" 
                  controls 
                  preload="metadata"
                >
                  {/* Make sure your file name matches exactly! */}
                  <source src="/videos/wedding2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-[#901C3C] transition">Sneha & Rohan</h3>
                <p className="text-gray-500 font-medium text-sm uppercase tracking-wide mt-2">Destination Wedding in Goa</p>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-[#901C3C] text-white font-bold rounded-full hover:bg-black transition duration-300 shadow-lg">
              Book a Videography Session
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}