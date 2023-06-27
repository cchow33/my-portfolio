import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <ScrollToTop />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
