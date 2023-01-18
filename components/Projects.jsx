import React from 'react'
import Image from 'next/image'
import { BsGithub, BsLink45Deg } from 'react-icons/bs'

const Projects = () => {

  return (

    <section id="projects" class='xl:max-w-7xl xl:mx-auto max-w-full pl-[8%] pr-[5%] pt-[10%] '>
     
      <h1 class="decoration-purple-300 decoration-4 text-[60px] mb-[20px] sm:text-[40px] sm:mt-[20px] xl:text-[70px]" ><span class='text-[30px]'> 💻</span> Projects</h1>
      <p class="font-display text-[30px] sm:text-[22px] xl:text-[30px]">Check out some things I have built:</p>

      <div class='xl:max-w-7xl xl:mx-auto max-w-full pl-[5%] pr-[5%] pt-[5%] xl:grid grid-cols-2 gap-x-5 gap-y-3 sm:flex flex-col'>

{/* Project 1: ToDo App */}

  <div class="bg-graycolor rounded-[20px] p-[40px] m-[40px]"> 
  {/* <div class="bg-gray-100 rounded-[20px] p-[40px] m-[40px]">  */}

    <p class="text-slate-800 text-[30px] font-bold">To Do App</p>

    <p class="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi, recusandae corrupti at quos ipsa nam quas error facilis laudantium.</p>  

    <div class="flex space-x-4">
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">JavaScript</div> 
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">CSS</div>
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">HTML</div> 
    </div>

    <Image src="/../public/assets/todo-project.png" alt="project1" width="500" height="500" class="mt-[10%] mb-[10%]"/>

    <div class="flex flex-row justify-end mt-10px">
        
      <a class="group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300 " target="_blank" rel="noopener noreferrer" href="https://github.com/cchow33/TODAY-todo-app"><BsGithub size={24}/><span>Source Code</span></a>

      <a href="https://today-todo-app.vercel.app/" target="_blank" rel="noopener noreferrer" class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"><BsLink45Deg size={24}/><span>Demo</span></a>

    </div>
  </div>

  {/* Project 2: Weather App */}

  <div class="bg-gray-100 rounded-[20px] p-[40px] m-[40px]"> 
        
    <p class="text-slate-800 text-[30px] font-bold">Weather App</p>

    <p class="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi, recusandae corrupti at quos ipsa nam quas error facilis laudantium.</p>  

    <div class="flex space-x-4">
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">React</div> 
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">CSS</div>
    </div>

    <Image src="/../public/assets/weather-project.png" alt="project2" width="500" height="500" class="mt-[10%] mb-[10%]"/>
  
    <div class="flex flex-row justify-end mt-10px">

    <a class="group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300 " target="_blank" rel="noopener noreferrer" href="https://github.com/cchow33/5Day-React-Weather"><BsGithub size={24}/><span>Source Code</span></a>

    <a href="https://5-day-react-weather.vercel.app/" target="_blank" rel="noopener noreferrer" class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"><BsLink45Deg size={24}/><span>Demo</span></a>

      </div>
    </div>

  {/* Project 3: Coffee Shop */}

  <div class="bg-gray-100 rounded-[20px] p-[40px] m-[40px]"> 
  
    <p class="text-slate-800 text-[30px] font-bold">Coffee Website</p>

    <p class="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi, recusandae corrupti at quos ipsa nam quas error facilis laudantium.</p>  

    <div class="flex space-x-4">
      <div class="text-black bg-gray-200 border-solid border-2 rounded-lg p-1 uppercase text-xs">React</div> 
      <div class="text-black bg-gray-200 border-solid border-2 rounded-lg p-1 uppercase text-xs">CSS</div>
    </div>

    <Image src="/../public/assets/coffee-project.png" alt="project3" width="500" height="500" class="mt-[10%] mb-[10%]"/>
  
    <div class="flex flex-row justify-end mt-10px">

    <a class="group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300 " target="_blank" rel="noopener noreferrer" href="https://github.com/chingu-voyages/v41-toucans-team-04"><BsGithub size={24}/><span>Source Code</span></a>

    <a href="https://toucan-coffee.netlify.app/" target="_blank" rel="noopener noreferrer" class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"><BsLink45Deg size={24}/><span>Demo</span></a>

      </div>
    </div>

{/* Project 4: Towers of Hanoi */}

  <div class="bg-gray-100 rounded-[20px] p-[40px] m-[40px]"> 
        
    <p class="text-slate-800 text-[30px] font-bold">Towers of Hanoi</p>

    <p class="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi, recusandae corrupti at quos ipsa nam quas error facilis laudantium.</p>  

    <div class="flex space-x-4">
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">Javascript</div> 
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">CSS</div>
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">HTML</div>
    </div>

    <Image src="/../public/assets/towers-project.png" alt="project4" width="500" height="500" class="mt-[10%] mb-[10%]"/>

    <div class="flex flex-row justify-end mt-10px">

    <a class="group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300 " target="_blank" rel="noopener noreferrer" href="https://github.com/cchow33/towers-of-hanoi"><BsGithub size={24}/><span>Source Code</span></a>

    <a href="https://towers-of-hanoi-eta.vercel.app/" target="_blank" rel="noopener noreferrer" class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"><BsLink45Deg size={24}/><span>Demo</span></a>

    </div>
  </div>

{/* Project 5: Portfolio */}

  <div class="bg-gray-100 rounded-[20px] p-[40px] m-[40px]"> 
   
    <p class="text-slate-800 text-[30px] font-bold">Portfolio</p>

    <p class="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi, recusandae corrupti at quos ipsa nam quas error facilis laudantium.</p>  

    <div class="flex space-x-4">
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">NodeJS</div> 
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">ReactJS</div> 
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">NextJS</div> 
      <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">Tailwind CSS</div>
    </div>

    <Image src="/../public/assets/portfolio-project.png" alt="project5" width="500" height="500" class="mt-[10%] mb-[10%]"/>
  
    <div class="flex flex-row justify-end mt-10px">

    <a class="group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300 " target="_blank" rel="noopener noreferrer" href="https://github.com/cchow33/my-portfolio"><BsGithub size={24}/><span>Source Code</span></a>

    <a href="https://today-todo-app.vercel.app/" target="_blank" rel="noopener noreferrer" class="ml-[8px] group flex text-sm items-center space-x-1 rounded-[100px] p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-black  hover:bg-gray-200 hover:text-black border-[1px] hover:border-black transition-colors ease-in-out duration-300"><BsLink45Deg size={24}/><span>Demo</span></a>

      </div>
      </div>
    </div>
        
    </section>
  )
}

export default Projects
