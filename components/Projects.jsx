import React from 'react'
import { BsGithub, BsLink45Deg } from 'react-icons/bs'
import Image from 'next/image'

const Projects = () => {

  return (
    <section id="projects">
      <div class="px-8"> 

      <h1 class='text-[60px] font-display underline decoration-blue-300 decoration-4'> Projects</h1>

      <div className="flex flex-col items-center gap-10 py-10 md:flex-row md:flex-wrap bg-[#f9fafb]">

{/* Project 1: ToDo App */}

{/* Card 1 Component */}
  <div class="space-y-2"> 

      <div class="flex flex-row ">
        <p class="text-slate-800 text-[30px] font-bold">To Do App</p>

        <a class="group flex text-sm items-center space-x-1 rounded-md p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors ease-in-out duration-300 " target="_blank" rel="noopener noreferrer" href="https://github.com/cchow33/5Day-React-Weather"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg><span>Source Code</span></a>

        <button type="button" class="group flex text-sm items-center space-x-1 rounded-md p-2 bg-gray-50 dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors ease-in-out duration-300 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg><span>Demo</span></button>


          {/* <span class="flex">
          <a href="https://github.com/cchow33/5Day-React-Weather" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <BsGithub size={30} color={'black'} /> Source Code</a>
          </span> */}


          {/* <a href="https://5-day-react-weather.vercel.app/" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <BsLink45Deg size={30} color={'black'}/> Live Demo</a> */}
      </div>
        
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi, recusandae corrupti at quos ipsa nam quas error facilis laudantium.</p>  

      <div class="flex space-x-4">
        <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">JavaScript</div> 
        <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">CSS</div>
        <div class="text-black bg-gray-200  border-solid border-2 rounded-lg p-1 uppercase text-xs">HTML</div> 
      </div>

          <Image src="/../public/assets/todo-project.png" alt="project1" width="500" height="500"/>
    
    </div>


    {/* Project 2: Weather App */}
          <div class="space-y-2">

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi, recusandae corrupti at quos ipsa nam quas error facilis laudantium.</p>  

            <Image src="/../public/assets/weather-project.png" alt="project2" width="500" height="500"/>
            <p class="text-slate-800 text-[20px] font-bold">Weather App</p>
            <p>5 Day weather pulling data from the Open Weather API</p>  

          <div class="flex space-x-4">
            <div class="bg-black text-white border rounded-lg p-1 uppercase text-xs">React</div> 
            <div class="bg-black text-white border rounded-lg p-1 uppercase text-xs">CSS</div> 
          </div>

       

{/* Project 3: Coffee */}


<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi, recusandae corrupti at quos ipsa nam quas error facilis laudantium.</p>  



<Image src="/../public/assets/coffee-project.png" alt="project3" width="500" height="500"/>
            <p class="text-slate-800 text-[20px] font-bold">Coffee Shop Site</p>
            <p>Website for coffee shop</p>  

            <div class="flex space-x-4">
            <div class="bg-black text-white border rounded-lg p-1 uppercase text-xs">React</div> 
            <div class="bg-black text-white border rounded-lg p-1 uppercase text-xs">CSS</div> 
          </div>

          <div class="flex">
            <a href="https://github.com/chingu-voyages/v41-toucans-team-04" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <BsGithub size={30} color={'black'}/>
            </a>

            <a href="https://toucan-coffee.netlify.app/shop/" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <BsLink45Deg size={30} color={'black'}/></a>
          </div>



{/* Project 4: Towers */}


<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi, recusandae corrupti at quos ipsa nam quas error facilis laudantium.</p>  

            <Image src="/../public/assets/towers-project.png" alt="project4" width="500" height="500"/>
            <p class="text-slate-800 text-[20px] font-bold">Towers of Hanoi</p>
            <p>Game moving pegs</p>  

            <div class="flex space-x-4">
            <div class="bg-black text-white border rounded-lg p-1 uppercase text-xs">JavaScript</div> 
            <div class="bg-black text-white border rounded-lg p-1 uppercase text-xs">CSS</div> 
            <div class="bg-black text-white border rounded-lg p-1 uppercase text-xs">HTML</div> 
          </div>

          <div class="flex">
            <a href="https://github.com/cchow33/towers-of-hanoi" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <BsGithub size={30} color={'black'}/>
            </a>

            <a href="https://vercel.com/cchow33/towers-of-hanoi" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"><BsLink45Deg size={30} color={'black'}/></a>
          </div>


{/* Project 5: Portfolio */}


<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi, recusandae corrupti at quos ipsa nam quas error facilis laudantium.</p>  

<Image src="/../public/assets/portfolio.png" alt="project5" width="500" height="500"/>
            <p class="text-slate-800 text-[20px] font-bold">Towers of Hanoi</p>
            <p>Game moving pegs</p>  

            <div class="flex space-x-4">
            <div class="bg-black text-white border rounded-lg p-1 uppercase text-xs">NextJS</div> 
            <div class="bg-black text-white border rounded-lg p-1 uppercase text-xs">Tailwind</div> 

          </div>

          <div class="flex">
            <a href="https://github.com/cchow33/towers-of-hanoi" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <BsGithub size={30} color={'black'}/>
            </a>

            <a href="https://vercel.com/cchow33/towers-of-hanoi" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <BsLink45Deg size={30} color={'black'}/></a>
          </div>


          
          </div>
        </div>
      </div>


    </section>
  )
}

export default Projects
