import { React, useState }  from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CgMenuRight } from 'react-icons/cg'
import { RiEyeCloseLine } from 'react-icons/ri'
import { ToggleButton } from './ToggleButton'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  const handleNav = () => {
    setNavbar(!navbar);
  };
  
  return (
    <header class= "bg-[#fcf2f1] h-[100%] pt-8">
    <div class="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[2%]  text-black navbar navbar-expand-lg navbar-light">

    <span class="flex-col">
      <p class="text-[#e9756b] font-black pb-[10%] sm:[10px]">carmen | chow</p>

      <ToggleButton/>
    </span>


    <nav class={`flex items-center w-auto`}>
      <ul class='flex items-center w-auto list none text-[25px]' >

      <a href="#about" class="relative inline-block px-3 py-1 font-medium group m-[10px] ">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
      <span class="relative text-black group-hover:text-white">About</span></a>

      <a href="#skills" class="relative inline-block px-3 py-1 font-medium group m-[10px] ">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
      <span class="relative text-black group-hover:text-white">Skills</span></a>

      <a href="#projects" class="relative inline-block px-3 py-1 font-medium group m-[10px] ">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
      <span class="relative text-black group-hover:text-white">Projects</span></a>

      <a href="#contact" class="relative inline-block px-3 py-1 font-medium group m-[10px] ">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
      <span class="relative text-black group-hover:text-white">Contact</span></a>
    </ul>

    {/* Mobile Button */}
    <div onClick={handleNav} class='block sm:hidden'>
      {navbar ? (
        <RiEyeCloseLine size={14}/> 
        ) : (
        <CgMenuRight size={14}/> 
        )}
    </div>

    {/* Mobile Menu */}

    <div class={
      navbar ? 'sm:hidden flex justify-center items-center w-full' : 'sm:hidden'
    }>

      <ul>
        <li onClick={handleNav}>About</li>
        <li onClick={handleNav}>Skills</li>
        <li onClick={handleNav}>Projects</li>
        <li onClick={handleNav}>Contact</li>
      </ul>
    </div>
    </nav>
    </div>
    </header>
  )
}

export default Navbar
