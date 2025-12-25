export default function Services() {
  const services = [
    {
      title: "Wedding Cinematography",
      desc: "Capturing your special day with a cinematic, storytelling approach.",
      icon: "🎥"
    },
    {
      title: "Candid Photography",
      desc: "Preserving raw emotions and fleeting moments as they happen.",
      icon: "📸"
    },
    {
      title: "Pre-Wedding Shoots",
      desc: "Dreamy, artistic sessions to celebrate your love before the big day.",
      icon: "✨"
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-white overflow-hidden">
      {/* Soft Background Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full filter blur-[100px] opacity-60 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full filter blur-[100px] opacity-60 -z-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* AESTHETIC FRAME: The border around the whole section */}
        <div className="relative border-[1px] border-[#901C3C]/20 rounded-[3rem] p-8 md:p-16 bg-white/30 backdrop-blur-sm shadow-sm">
          
          {/* Decorative Corner Lines (Top-Left & Bottom-Right) for extra aesthetics */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#901C3C]/40 rounded-tl-2xl"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#901C3C]/40 rounded-br-2xl"></div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#901C3C] mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We don't just take photos; we craft memories that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl border border-rose-200 hover:border-[#901C3C] transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Card Inner Border Effect */}
                <div className="absolute inset-2 border border-dashed border-rose-100 rounded-xl pointer-events-none group-hover:border-[#901C3C]/20 transition-colors duration-500"></div>

                <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:bg-[#901C3C] group-hover:text-white transition duration-500 relative z-10">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-[#901C3C] transition relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}