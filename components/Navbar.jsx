import { React, useState }  from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClose, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  // const [navbar, setNavbar] = useState(false)

  // const handleNav = () => {}
  
  return (
    <nav className='bg-[#fcf2f1]'>
      <Image src="/../public/assets/tag.png" alt="/" width="60" height="60"/>
    </nav>
  )
}

export default Navbar
