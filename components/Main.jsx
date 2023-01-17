import React from 'react'
import { BsArrowDownCircle, BsGithub, BsLinkedin } from 'react-icons/bs'

const Main = () => {

  return (
    <div class = 'bg-[#fcf2f1] grid h-screen place-items-center'>
      <h1 class='text-[120px] font-display'>Carmen Chow</h1>
      <h2 class='text-[80px] font-display pt-0 mt-[0px]'>Front-end Developer</h2>
      
      <div class="flex">

  {/* Keep this: */}
    
        <a target="_blank" href="https://github.com/cchow33" rel="noopener noreferrer"  class="relative inline-block px-3 py-1 font-medium group m-[10px]"><BsGithub size={40}/></a>


{/* Testing: */}

      <a target="_blank" href="https://www.linkedin.com/in/carmen-cchow/"rel="noopener noreferrer"  class="relative inline-block px-3 py-1 font-medium group m-[10px]">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
      <span class="relative text-black group-hover:text-white"><BsLinkedin size={40}/></span></a>

      <a href="#about" class="relative inline-block px-3 py-1 font-medium group m-[10px] ">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>
      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>
      <span class="relative text-black group-hover:text-white"><BsGithub size={40}/></span></a>


      </div>
    </div>
    
  )
}

export default Main
