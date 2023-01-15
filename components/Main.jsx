import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  return (
    <div className = 'bg-[#fcf2f1]'>
      <h1 class='text-[80px] font-display'>Carmen Chow</h1>
      <h1 class='text-[80px] font-display'>Front-end Developer</h1>

      <ul class='list none text-[30px]' >
        <li>About</li>  
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    
    <button className='scroll'>
      <FontAwesomeIcon icon={faArrowDown} width={50} height = {50}/>
    </button>


    <button className='m-16 relative group'>Back to the top
        <span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full">
          <FontAwesomeIcon icon={faArrowUp} width={50} height = {50} />
        </span>
      </button>

    </div>
    
  )
}

export default Main
