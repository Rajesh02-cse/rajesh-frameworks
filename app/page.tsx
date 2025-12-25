import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos"; // <--- Import Videos
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Videos /> {/* <--- Add Video Section here */}
      <Services />      
      <Contact />
      <Footer />
    </main>
  );
}