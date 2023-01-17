import React from 'react'
import { BsArrowDownCircle, BsGithub, BsLinkedin } from 'react-icons/bs'

const Main = () => {

  return (
    <div class = 'bg-[#fcf2f1] grid h-screen place-items-center'>
      <h1 class='text-[130px] font-display'>Carmen Chow</h1>
      <h1 class='text-[80px] font-display'>Front-end Developer</h1>
      
      <div class="flex">
        <a target="_blank" href="https://github.com/cchow33" rel="noopener noreferrer"><BsGithub size={40}/></a>

        <a target="_blank" href="https://www.linkedin.com/in/carmen-cchow/" rel="noopener noreferrer" class='mx-10'><BsLinkedin size={40}/></a>
      </div>

      <button><BsArrowDownCircle size={30}/></button>
    </div>
    
  )
}

export default Main
