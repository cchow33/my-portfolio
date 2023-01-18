import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
// import Navbar2 from '../components/Navbar2'
import Main from '../components/Main'
import { ToggleButton } from '@/components/ToggleButton'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Navbar/>
      {/* <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>toggle</button> */}
      {/* <Navbar2/> */}
      <Main/>
      {/* <ToggleButton/> */}
      <ScrollToTop/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}
