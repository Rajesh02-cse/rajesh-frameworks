export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        {/* Using a clean, aesthetic workspace/tech abstract image. Change URL if you want weddings back! */}
        <img 
  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop" 
  alt="Indian Wedding Couple" 
  className="w-full h-full object-cover"
/>
        {/* White overlay to make it look 'Glassy' and bright */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      </div>

      {/* 2. GLASS CARD CONTENT */}
      <div className="relative z-10 px-6 w-full max-w-4xl mx-auto">
        <div className="glass-card p-10 md:p-16 rounded-3xl text-center shadow-2xl">
          
          <span className="inline-block py-1 px-4 rounded-full bg-rose-100 text-[#901C3C] text-sm font-bold tracking-wide mb-6">
            INNOVATION • DESIGN • QUALITY
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
            Welcome to <br/>
            <span className="text-[#901C3C]">Rajesh Frameworks</span>
          </h1>

          <p className="text-lg text-gray-800 mb-8 leading-relaxed max-w-lg mx-auto font-medium">
            Crafting premium digital experiences with a focus on aesthetics and performance.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="#portfolio" className="px-8 py-3 bg-[#901C3C] text-white font-bold rounded-full hover:bg-black transition duration-300 shadow-lg min-w-[200px]">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-white text-gray-900 border border-gray-300 font-bold rounded-full hover:bg-gray-50 transition duration-300 min-w-[200px]">
              Get in Touch
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}