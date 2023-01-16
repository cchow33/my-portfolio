import { React, useState }  from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { faLinkedin, faGithub } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClose, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  // const [navbar, setNavbar] = useState(false)
  // const handleNav = () => {}
  
  return (
    <nav className='bg-[#fcf2f1]'>
      <Image src="/../public/assets/tag.png" alt="/" width="60" height="60"/>
      <FontAwesomeIcon icon={faGithub}/>

      {/* <div className = 'socials'> */}
        <FontAwesomeIcon icon={faGithub} width={50} height= {50}/>Github<a target="_blank" href="https://github.com/cchow33" rel="noopener noreferrer"></a>

        <a target="_blank" href="https://www.linkedin.com/in/carmen-cchow/" rel="noopener noreferrer">  <FontAwesomeIcon icon={faLinkedin} width={50} height = {50}/>LinkedIn</a>

        <a target="_blank" href="https://www.linkedin.com/in/carmen-cchow/" rel="noopener noreferrer">Here</a>
      {/* </div> */}

    </nav>
  )
}

export default Navbar
