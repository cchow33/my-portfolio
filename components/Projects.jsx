import React from 'react'
import { RxVercelLogo } from 'react-icons/rx'
import { FiGithub } from 'react-icons/fi'
import Image from 'next/image'

const Projects = () => {

  return (
    <section id="projects">
      <div class="px-8"> 

      <h1 class='text-[60px] font-display underline decoration-blue-300 decoration-4'> Projects</h1>

      <div className="flex flex-col items-center gap-10 py-10 md:flex-row md:flex-wrap">

{/* Project 1: ToDo App */}

        <div class="space-y-2">
          <Image src="/../public/assets/todo.png" alt="project1" width="500" height="500"/>
          <p class="text-slate-800 text-[20px] font-bold">To Do App</p>
          <p>Get your life organized. 
          Productivity tool to keep you accountable!</p>  

          <div class="flex space-x-4">
            <div class="border border-pink-400 rounded-lg p-1 uppercase text-xs">JavaScript</div> 
            <div class="border border-green-500 rounded-lg p-1 uppercase text-xs">CSS</div> 
            <div class="border border-blue-400 rounded-lg p-1 uppercase text-xs">HTML</div> 
          </div>

          <div class="flex">
            <a href="https://github.com/cchow33/TODAY-todo-app" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <FiGithub size={30}/></a>

            <a href="https://todo-app-carpediem.netlify.app/" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <RxVercelLogo size={30}/></a>
          </div>

    {/* Project 2: Weather App */}
          <div class="space-y-2">
            <Image src="/../public/assets/weather-project.png" alt="project2" width="500" height="500"/>
            <p class="text-slate-800 text-[20px] font-bold">Weather App</p>
            <p>5 Day weather pulling data from the Open Weather API</p>  

          <div class="flex space-x-4">
            <div class="border border-pink-400 rounded-lg p-1 uppercase text-xs">React</div> 
            <div class="border border-green-500 rounded-lg p-1 uppercase text-xs"></div> 
          </div>

          <div class="flex">
            <a href="https://github.com/cchow33/5Day-React-Weather" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <FiGithub size={30}/>
            </a>

            <a href="https://5-day-react-weather.vercel.app/" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <RxVercelLogo size={30}/>              
            </a>
          </div>

{/* Project 3: Coffee */}
<Image src="/../public/assets/coffee-project.png" alt="project3" width="500" height="500"/>
            <p class="text-slate-800 text-[20px] font-bold">Coffee Shop Site</p>
            <p>Website for coffee shop</p>  

            <div class="flex space-x-4">
            <div class="border border-pink-400 rounded-lg p-1 uppercase text-xs">React</div> 
            <div class="border border-green-500 rounded-lg p-1 uppercase text-xs">CSS</div> 
          </div>

          <div class="flex">
            <a href="https://github.com/chingu-voyages/v41-toucans-team-04" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <FiGithub size={30}/>
            </a>

            <a href="https://toucan-coffee.netlify.app/shop/" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <RxVercelLogo size={30}/>              
            </a>
          </div>



{/* Project 4: Towers */}
            <Image src="/../public/assets/towers-project.png" alt="project4" width="500" height="500"/>
            <p class="text-slate-800 text-[20px] font-bold">Towers of Hanoi</p>
            <p>Game moving pegs</p>  

            <div class="flex space-x-4">
            <div class="border border-pink-400 rounded-lg p-1 uppercase text-xs">JavaScript</div> 
            <div class="border border-green-500 rounded-lg p-1 uppercase text-xs">CSS</div> 
            <div class="border border-blue-400 rounded-lg p-1 uppercase text-xs">HTML</div> 
          </div>

          <div class="flex">
            <a href="https://github.com/cchow33/towers-of-hanoi" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <FiGithub size={30}/>
            </a>

            <a href="https://vercel.com/cchow33/towers-of-hanoi" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <RxVercelLogo size={30}/>              
            </a>
          </div>


{/* Project 5: Portfolio */}
<Image src="/../public/assets/portfolio.png" alt="project5" width="500" height="500"/>
            <p class="text-slate-800 text-[20px] font-bold">Towers of Hanoi</p>
            <p>Game moving pegs</p>  

            <div class="flex space-x-4">
            <div class="border border-pink-400 rounded-lg p-1 uppercase text-xs">NextJS</div> 
            <div class="border border-green-500 rounded-lg p-1 uppercase text-xs">Tailwind</div> 

          </div>

          <div class="flex">
            <a href="https://github.com/cchow33/towers-of-hanoi" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <FiGithub size={30}/>
            </a>

            <a href="https://vercel.com/cchow33/towers-of-hanoi" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> <RxVercelLogo size={30}/>              
            </a>
          </div>


          
          </div>
        </div>
      </div>
    </div>

    </section>
  )
}

export default Projects
