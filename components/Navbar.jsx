import { React, useState }  from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Navbar = () => {
  // const [navbar, setNavbar] = useState(false)
  // const handleNav = () => {}
  
  return (
<nav
  class="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#fcf2f1] text-black navbar navbar-expand-lg navbar-light">

      <Image src="/../public/assets/tag.png" alt="/" width="60" height="60"/>

      <ul class='list none text-[25px]' >
      <a href="#about" class="relative inline-block px-3 py-1 font-medium group">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span class="relative text-black group-hover:text-white">About</span></a>

      <a href="#skills" class="relative inline-block px-3 py-1 font-medium group">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span class="relative text-black group-hover:text-white">Skills</span></a>

      <a href="#projects" class="relative inline-block px-3 py-1 font-medium group">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span class="relative text-black group-hover:text-white">Projects</span></a>

      <a href="#contact" class="relative inline-block px-3 py-1 font-medium group">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span class="relative text-black group-hover:text-white">Contact</span></a>
    </ul>

    </nav>
  )
}

export default Navbar
