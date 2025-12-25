"use client";

import { useState } from "react";

export default function Gallery() {
  // 1. Setup the 5x4 Grid (20 Images total)
  // We repeat a set of Unsplash IDs to fill 20 slots
  const imageIds = [
    "1606800052052-a08af7148866", "1519741497674-611481863552", "1595981267035-7b04ca84a82d", "1623945202636-c0c53d162128",
    "1532712938310-34cb3982ef74", "1583939003579-730e3918a45a", "1545231027-637d2f6210f8", "1609151162377-794bf3e6db1e",
    "1511285560907-6f6eec75f43b", "1515934751635-c81c6bc9a2d8", "1529636798413-0b038b009d16", "1469334031218-e382a71b716b",
    "1550005809-91add7527252", "1524824264700-1b3304a37658", "1507915971224-aa19280f9072", "1516961642265-53185e9b51af",
    "1606216794074-735e76c62d29", "1546195619-674452243d4c", "1566737236500-c8ac43014a67", "1537633552985-df8429e8048b"
  ];

  // Helper to get URL
  const getUrl = (id: string) => `https://images.unsplash.com/photo-${id}?q=80&w=500&h=500&auto=format&fit=crop`;

  // Categories for the filter buttons
  const categories = ["All", "Weddings", "Pre-Wedding", "Events", "Portraits"];
  const [activeCat, setActiveCat] = useState("All");

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Aesthetic Frame Wrapper */}
        <div className="relative border-[1px] border-[#901C3C]/20 rounded-[3rem] p-8 md:p-12 bg-rose-50/20">
          
          {/* Decorative Corners */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-[#901C3C]/40 rounded-tl-2xl"></div>
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[#901C3C]/40 rounded-br-2xl"></div>

          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-[#901C3C] font-bold tracking-wider uppercase text-sm">Our Portfolio</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Captured Memories</h2>
            <p className="text-gray-500 text-sm mt-2">Browse through our collection of premium shots.</p>
          </div>

          {/* Filter Buttons (Like the image) */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                  activeCat === cat 
                    ? "bg-white text-[#901C3C] border-[#901C3C] shadow-sm" 
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-[#901C3C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 5x4 GRID LAYOUT */}
          {/* grid-cols-2 on mobile, grid-cols-4 on desktop = 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {imageIds.slice(0, 20).map((id, index) => (
              <div 
                key={index} 
                className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-sm hover:shadow-lg transition-all"
              >
                <img 
                  src={getUrl(id)} 
                  alt={`Portfolio ${index}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif font-medium tracking-wide border border-white px-4 py-1 rounded-full text-sm backdrop-blur-sm">
                    View
                  </span>
                </div>
              </div>
            ))}

          </div>

          <div className="mt-12 text-center">
            <button className="px-10 py-3 border border-[#901C3C] text-[#901C3C] font-bold rounded-full hover:bg-[#901C3C] hover:text-white transition duration-300">
              Load More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}