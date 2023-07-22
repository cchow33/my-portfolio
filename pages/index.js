import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import About from "@/components/About";
import Transitions from "@/components/Transitions";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <Transitions />
      <Main />
      <ScrollToTop />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
