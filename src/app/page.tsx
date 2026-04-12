import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CurrentWork from "@/components/CurrentWork";
import PreviousWork from "@/components/PreviousWork";
import SignatureStories from "@/components/SignatureStories";
import FieldNotes from "@/components/FieldNotes";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import ScrollProgress from "@/components/ScrollProgress";
import { getAllStories, getFeaturedStories } from "@/lib/stories";

export default function Home() {
  const featured = getFeaturedStories(3).map((s) => ({
    slug: s.slug,
    title: s.title,
    project: s.project,
    summary: s.summary,
    lesson: s.lesson,
    readingTime: s.readingTime,
  }));

  const latest = getAllStories()
    .slice(0, 5)
    .map((s) => ({
      slug: s.slug,
      title: s.title,
      date: s.date,
      project: s.project,
      readingTime: s.readingTime,
    }));

  return (
    <MotionProvider>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <CurrentWork />
        <PreviousWork />
        <SignatureStories stories={featured} />
        <FieldNotes notes={latest} />
        <About />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
