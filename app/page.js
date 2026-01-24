import About from "@/components/About";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";



export default function Home() {
  return  <>
  <Navbar />
  <main className="pt-20">
    <Hero />
    <About />
    <Portfolio />
    <Certificate />
    <Contact />
  </main>
  </>
  
}
