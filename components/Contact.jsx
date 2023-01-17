import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Contact = () => {
  return (

    <section id="contact" class = 'bg-[#fcf2f1] grid h-screen place-items-center'>

    <div class='xl:max-w-7xl xl:mx-auto max-w-full pl-[5%] pr-[5%] pt-[10%]'>
      
    <h1 class="decoration-purple-300 decoration-4 text-[60px] mb-[20px]">. Contact</h1>
    <p class="font-display text-[30px]">Get in touch with me at <span class="underline">reach.cchow@gmail.com</span>  if you want to connect, hire me, or build something.</p>
      
      <span class="flex">
        <a target="_blank" href="https://github.com/cchow33" rel="noopener noreferrer"  class="relative inline-block px-3 py-1 font-medium group m-[10px]"><BsGithub size={40}/></a>
       
        <a target="_blank" href="https://www.linkedin.com/in/carmen-cchow" rel="noopener noreferrer"  class="relative inline-block py-1 font-medium group m-[10px]"><BsLinkedin size={40}/></a>
       
      </span>

    </div>
    </section>
  )
}

export default Contact





