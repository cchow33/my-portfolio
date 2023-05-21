import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <ScrollToTop />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
