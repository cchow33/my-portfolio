import { React, useState }  from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Navbar = () => {
  // const [navbar, setNavbar] = useState(false)
  // const handleNav = () => {}
  
  return (
    <nav className='bg-[#fcf2f1]'>
      <Image src="/../public/assets/tag.png" alt="/" width="60" height="60"/>
      
      <a target="_blank" href="https://github.com/cchow33" rel="noopener noreferrer">  <BsGithub size={30}/></a>

      <a target="_blank" href="https://www.linkedin.com/in/carmen-cchow/" rel="noopener noreferrer">  <BsLinkedin size={30}/></a>

    </nav>
  )
}

export default Navbar
