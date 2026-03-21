import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CurrentWork from "@/components/CurrentWork";
import PreviousWork from "@/components/PreviousWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <Nav />
      <main>
        <Hero />
        <CurrentWork />
        <PreviousWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
