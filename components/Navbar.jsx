import { React, useState }  from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClose, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  // const [navbar, setNavbar] = useState(false)
  // const handleNav = () => {}
  
  return (
    <nav className='bg-[#fcf2f1]'>
      <Image src="/../public/assets/tag.png" alt="/" width="60" height="60"/>

      <span className='content-end'>
        <a href="https://www.linkedin.com/in/carmen-cchow/"><FaLinkedin size={40}/></a>
        <a href="https://github.com/cchow33"><FaGithub size={40}/></a>
      </span>  
    </nav>
  )
}

export default Navbar
