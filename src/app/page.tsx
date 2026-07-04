import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      <div className="relative flex flex-col">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
