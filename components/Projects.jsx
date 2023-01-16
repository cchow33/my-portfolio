import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id="projects">

      <h1 class='text-[60px]'> Projects</h1>

      <div class="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">

    <div class="max-w-7xl mx-auto">
      <div class="relative group">
        {/* <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6"> */}
    
          <div class="space-y-2">
            <Image src="/../public/assets/todo.png" alt="project" width="500" height="500"/>
            <p class="text-slate-800 text-[20px] font-bold">To Do App</p>
            <p>Get your life organized. 
            Productivity tool to keep you accountable!</p>  

            <div class="flex space-x-4">
              <div class="border border-pink-400 rounded-lg p-1 uppercase text-xs">JavaScript</div> 
              <div class="border border-green-500 rounded-lg p-1 uppercase text-xs">CSS</div> 
              <div class="border border-blue-400 rounded-lg p-1 uppercase text-xs">HTML</div> 
            </div>

            <div class="flex">
              <a href="https://github.com/cchow33/TODAY-todo-app" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> 
                <Image src="/../public/assets/github.png" alt="github" width="30" height="30"/>
              </a>

              <a href="https://todo-app-carpediem.netlify.app/" class="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank"  without rel="noreferrer"> 
                <Image src="/../public/assets/deploy.jpg" alt="live" width="50" height="50"/>
              </a>
              </div>

          </div>
        </div>
      </div>
    </div>
  {/* </div> */}



    </section>
  )
}

export default Projects
