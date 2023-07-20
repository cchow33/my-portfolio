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
      {/* <m.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-gradient-to-br from-pink-300 to-[#a9c1e4] filter blur-3xl opacity-50"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duraction: 0.5, ease: "easeInOut" }}
        exit={{ opactiy: 1 }}
      > */}
      <Transitions />
      <Main />
      <ScrollToTop />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {/* </m.div> */}
    </>
  );
}
