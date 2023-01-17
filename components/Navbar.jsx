import { React, useState }  from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  // const [navbar, setNavbar] = useState(false)
  // const handleNav = () => {}
  
  return (
<nav
  class="flex items-center justify-between bg-[#fcf2f1] pt-[30px] pl-[30px] pr-[30px] text-black navbar navbar-expand-lg navbar-light">

      <Image src="/../public/assets/tag.png" alt="/" width="60" height="60"/>

      <ul class='list none text-[25px]' >

      <a href="#about" class="relative inline-block px-3 py-1 font-medium group m-[10px] ">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
      <span class="relative text-black group-hover:text-white">About</span></a>

      <a href="#about" class="relative inline-block px-3 py-1 font-medium group m-[10px] ">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
      <span class="relative text-black group-hover:text-white">Skills</span></a>

      <a href="#about" class="relative inline-block px-3 py-1 font-medium group m-[10px] ">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
      <span class="relative text-black group-hover:text-white">Projects</span></a>

      <a href="#about" class="relative inline-block px-3 py-1 font-medium group m-[10px] ">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
      <span class="relative text-black group-hover:text-white">Contact</span></a>
    </ul>

    </nav>
  )
}

export default Navbar
