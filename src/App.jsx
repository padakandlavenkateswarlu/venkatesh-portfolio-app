import { MotionConfig } from 'framer-motion';
import Navbar from './assets/components/Navbar.jsx';
import Footer from './assets/components/Footer.jsx';
import BubbleTrail from './assets/components/BubbleTrail.jsx';
import Hero from "./assets/sections/Hero.jsx";
import About from "./assets/sections/About.jsx";
import Skills from "./assets/sections/Skills.jsx";
import Projects from "./assets/sections/Projects.jsx";
import Experience from "./assets/sections/Experience.jsx";
import Training from "./assets/sections/Training.jsx";
import Process from "./assets/sections/Process.jsx";
import Contact from "./assets/sections/Contact.jsx";
export default function App() {
  return (
    // reducedMotion="user" makes every Framer animation respect the OS setting.
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Training />
        <Process />
        <Contact />
      </main>
      <Footer />
      <BubbleTrail />
    </MotionConfig>
  );
}
