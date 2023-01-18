import { React, useState }  from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CgMenuRight } from 'react-icons/cg'
import { RiEyeCloseLine } from 'react-icons/ri'

const Navbar2 = () => {
  const [nav, setNav] = useState(false)


  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav class='fixed left-0 top-0 w-full z-10 ease-in duration-300'>

    {/* 1. Logo */}
      <div name='max-w-[1240px] m-auto flex justify-between items-center p-4'>
        <Link href='/'>
          <Image src="/../public/assets/tag.png" alt="/" width="60" height="60"/>
        </Link>
  

    {/* 2. Links */}
        <ul class='hidden sm:flex'>
          <li>About</li>
            {/* <a href="#about" class="relative inline-block px-3 py-1 font-medium group m-[10px] ">
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
            <span class="relative text-black group-hover:text-white">About</span></a> */}

          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        {/* Mobile button */}
        <div class='block sm:hidden'>
          { nav ? (
            <RiEyeCloseLine size={20}/>
            ) : (
            <CgMenuRight size={20}/>
            )}
        </div>

        {/* Mobile menu */}
        <div>
        <ul >
          <li  class='rotate-90'>About</li>
            {/* <a href="#about" class="relative inline-block px-3 py-1 font-medium group m-[10px]"><span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
            <span class="relative text-black group-hover:text-white">About</span></a> */}

          <li  class='rotate-90'>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        </div>



      </div>
    </nav>
          
  )
}

export default Navbar2
