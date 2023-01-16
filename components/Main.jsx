import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  return (
    <div class = 'bg-[#fcf2f1]'>
      <h1 class='text-[80px] font-display'>Carmen Chow</h1>
      <h1 class='text-[80px] font-display'>Front-end Developer</h1>

      <ul class='list none text-[25px]' >
        <a href="#_" class="relative inline-block px-3 py-1 font-medium group">
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span class="relative text-black group-hover:text-white">About</span></a>

        <a href="#_" class="relative inline-block px-3 py-1 font-medium group">
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span class="relative text-black group-hover:text-white">Skills</span></a>

        <a href="#_" class="relative inline-block px-3 py-1 font-medium group">
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span class="relative text-black group-hover:text-white">Project</span></a>

        <a href="#_" class="relative inline-block px-3 py-1 font-medium group">
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span class="relative text-black group-hover:text-white">Contact</span></a>

      </ul>
    
    {/* <button class='outline hover:outline-2 rounded-full'> */}
    <button class='hover:border-black border-transparent border-2 rounded-full py-2 px-2 transition-ease-in-out delay-350'>
      <FontAwesomeIcon icon={faArrowDown} width={50} height = {50}/>
    </button>


    <button class='hover:bg-black text-white rounded-full py-2 px-2 transition-ease-in-out delay-350'>
      <span class='text-black'>
        <FontAwesomeIcon icon={faArrowUp} width={50} height = {50} />
      </span>
    </button>
    <p>Scroll Up</p>

    </div>
    
  )
}

export default Main
