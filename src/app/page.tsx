import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CurrentWork from "@/components/CurrentWork";
import PreviousWork from "@/components/PreviousWork";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <MotionProvider>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <CurrentWork />
        <PreviousWork />
        <About />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
