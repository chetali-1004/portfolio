import Skills from "./components/Skills";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import More from "./components/More";
import Email from "./components/Email";
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#181818]">
      <Navbar />
        <div className="mx-auto px-5 lg:px-12 py-4 mt-24">
            <HeroSection />
            <Skills />
            <Projects />
            <More />
            <Email />
        </div>
        <Footer />
    </main>
  );
}

