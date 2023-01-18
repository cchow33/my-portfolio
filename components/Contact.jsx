import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail }  from 'react-icons/si'

const Contact = () => {
  return (

    <section id="contact" class = 'bg-[#fcf2f1] place-items-center'>

{/* <section id="contact" class = 'bg-[#fcf2f1] grid h-screen place-items-center'> */}

    <div class='xl:max-w-7xl xl:mx-auto max-w-full pl-[8%] pr-[5%] py-[10%]'>
      
    <h1 class="decoration-purple-300 decoration-4 text-[60px] mb-[20px] sm:text-[40px] sm:mt-[20px] xl:text-[70px]"><span class='text-[40px] mr-[5px]'> ✉️ </span> Contact</h1>
    <p class="font-display text-[30px] leading-loose sm:text-[22px] xl:text-[30px]">Have a question? <br></br> Want to hire me, work together or just want to say hello? <br></br>Email me at <span class="underline">reach.cchow@gmail.com</span> and let's chat!</p>
      
      <span class="flex">
        <a target="_blank" href="https://github.com/cchow33" rel="noopener noreferrer"  class="relative inline-block py-5 pr-4 font-medium group m-[10px]"><BsGithub size={40}/></a>
       
        <a target="_blank" href="https://www.linkedin.com/in/carmen-cchow" rel="noopener noreferrer"  class="relative inline-block py-5 pr-4 font-medium group m-[10px]"><BsLinkedin size={40}/></a>

        <a target="_blank" href="mailto:reach.cchow@gmail.com?subject=your title&body=The message" rel="noopener noreferrer" class="relative inline-block py-5 pr-4 font-medium group m-[10px]"><SiGmail size={40}/></a>

        </span>
      </div>
    </section>
  )
}

export default Contact





