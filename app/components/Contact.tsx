"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-50/30 -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* AESTHETIC FRAME WRAPPER */}
        <div className="relative border-[1px] border-[#901C3C]/20 rounded-[3rem] p-8 md:p-16 bg-white shadow-xl">
          
          {/* Decorative Corners */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#901C3C]/40 rounded-tl-2xl"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#901C3C]/40 rounded-br-2xl"></div>

          <div className="flex flex-col md:flex-row gap-12 relative z-10">
            
            {/* Left: Contact Info */}
            <div className="w-full md:w-1/3 space-y-8 pt-4">
              <span className="text-[#901C3C] font-bold tracking-wider text-sm uppercase border-b border-[#901C3C] pb-1">Get in Touch</span>
              <h3 className="text-3xl font-serif font-bold text-gray-900">Let's Create Magic</h3>
              <p className="text-gray-600">
                Your story deserves to be captured perfectly. Fill out the form or reach out directly.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-rose-200 bg-rose-50 flex items-center justify-center text-[#901C3C] group-hover:bg-[#901C3C] group-hover:text-white transition duration-300">✉️</div>
                  <span className="text-gray-800 font-medium group-hover:text-[#901C3C] transition">rajesh@frameworks.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-rose-200 bg-rose-50 flex items-center justify-center text-[#901C3C] group-hover:bg-[#901C3C] group-hover:text-white transition duration-300">📞</div>
                  <span className="text-gray-800 font-medium group-hover:text-[#901C3C] transition">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-rose-200 bg-rose-50 flex items-center justify-center text-[#901C3C] group-hover:bg-[#901C3C] group-hover:text-white transition duration-300">📍</div>
                  <span className="text-gray-800 font-medium group-hover:text-[#901C3C] transition">Kolkata, West Bengal</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full md:w-2/3 bg-rose-50/30 p-8 rounded-3xl border border-rose-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#901C3C] uppercase tracking-wide">Your Name</label>
                    <input type="text" className="w-full px-4 py-4 rounded-xl border border-rose-200 bg-white focus:border-[#901C3C] focus:ring-1 focus:ring-[#901C3C] outline-none transition" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#901C3C] uppercase tracking-wide">Email Address</label>
                    <input type="email" className="w-full px-4 py-4 rounded-xl border border-rose-200 bg-white focus:border-[#901C3C] focus:ring-1 focus:ring-[#901C3C] outline-none transition" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#901C3C] uppercase tracking-wide">Message</label>
                  <textarea rows={4} className="w-full px-4 py-4 rounded-xl border border-rose-200 bg-white focus:border-[#901C3C] focus:ring-1 focus:ring-[#901C3C] outline-none transition" placeholder="Tell us about your event details..."></textarea>
                </div>
                
                <button type="submit" className="w-full py-4 bg-[#901C3C] text-white font-bold rounded-xl hover:bg-gray-900 transition duration-300 shadow-lg transform hover:-translate-y-1">
                  SEND MESSAGE
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}