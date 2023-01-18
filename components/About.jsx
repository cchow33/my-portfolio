import React from 'react'
import Image from 'next/image'



const About = () => {

  return (

  <section id="about" p-20>

    <div class='xl:max-w-7xl xl:mx-auto max-w-full pl-[5%] pr-[5%] pt-[10%]'>
      
      <h1 class="decoration-purple-300 decoration-4 text-[60px] mb-[20px]"><span class='text-[40px]'> 👋</span> About Me </h1>


      <Image src="/../public/assets/photo.jpg" alt="/" width="100" height="100" class='border rounded-full border border-gray-300 border-4'/>

      <p class='text-[30px] font-display'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam earum ratione nobis autem culpa quidem, quod dolorum. Ex quidem omnis ipsam veritatis, commodi a suscipit aliquid! Fugit minus sint iste? Lour.</p> 
      

      <div>
        <p class="mt-[20px] mb-[20px] text-[40px]">When I/m not coding, I/m:</p>
        <ul>
          <li class="font-display text-[20px] mt-[20px]">🏃 training for a 10K</li>
          <li class="font-display text-[20px]">🎙️ listening to a podcast </li>
          <li class="font-display text-[20px]">🥪 looking for the best banh mi sandwiches in the city</li>
        </ul>
      </div>
    
    </div>

    </section>
  )
}

export default About
