import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Contact = () => {
  return (


    <section id="contact" class = 'bg-[#fcf2f1] grid h-screen place-items-center'>

      <h1 class='text-[60px] font-display'>Contact</h1>

      <p>Get in touch with me at reach.cchow@gmail.com if you want to connect, hire me, or build something.</p>
      
      <span class="flex">
        <BsGithub size={40}/>
        <BsLinkedin size={40}/>
      </span>

    </section>
  )
}

export default Contact





