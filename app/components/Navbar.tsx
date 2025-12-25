"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[#901C3C]/20 py-4" 
        : "bg-transparent border-b border-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo with simple text border effect */}
        <Link href="/" className="group relative">
           <span className="text-2xl font-serif font-bold text-[#901C3C] tracking-tight relative z-10">
            Rajesh<span className="text-black"> Frameworks</span>
           </span>
           {/* Decorative underline on hover */}
           <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#901C3C] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-800 tracking-wide">
          <Link href="#home" className="hover:text-[#901C3C] transition relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#901C3C]/50 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#portfolio" className="hover:text-[#901C3C] transition relative group">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#901C3C]/50 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#videos" className="hover:text-[#901C3C] transition relative group">
            Videos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#901C3C]/50 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#services" className="hover:text-[#901C3C] transition relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#901C3C]/50 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          {/* Aesthetic 'Book Now' Button */}
          <Link href="#contact" className="px-8 py-3 bg-[#901C3C] text-white rounded-full hover:bg-black transition-all shadow-lg transform hover:-translate-y-0.5 border border-transparent hover:border-[#901C3C]">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900">
           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-rose-100 absolute w-full shadow-2xl">
          <div className="flex flex-col p-8 space-y-6 font-bold text-gray-900 text-center">
            <Link href="#home" onClick={() => setIsOpen(false)} className="hover:text-[#901C3C]">Home</Link>
            <Link href="#portfolio" onClick={() => setIsOpen(false)} className="hover:text-[#901C3C]">Portfolio</Link>
            <Link href="#videos" onClick={() => setIsOpen(false)} className="hover:text-[#901C3C]">Videos</Link>
            <Link href="#services" onClick={() => setIsOpen(false)} className="hover:text-[#901C3C]">Services</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-[#901C3C] border border-[#901C3C] py-3 rounded-full mx-10">Book Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}