import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/hero";
import Skills from "./components/sections/Skills";
import FeaturedProject from "./components/sections/FeaturedProject";
import TechRibbon from "./components/sections/TechRibbon";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import OtherProjects from "./components/sections/OtherProjects";
import Footer from "./components/layout/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechRibbon />
      <FeaturedProject />
      <About />
      <Skills />
      <OtherProjects />

      <Experience />

    

      <Contact />

      <Footer />

      
    </>
  );
}
