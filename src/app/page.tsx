import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CurrentWork from "@/components/CurrentWork";
import PreviousWork from "@/components/PreviousWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CurrentWork />
        <PreviousWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
