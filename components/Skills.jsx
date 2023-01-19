import React from 'react'
import { AiFillHtml5 }  from 'react-icons/ai'
import { IoLogoCss3, IoLogoNodejs }  from 'react-icons/io'
import { SiJavascript, SiTailwindcss, SiMongodb, SiJquery, SiExpress }  from 'react-icons/si'
import { TbBrandNextjs }  from 'react-icons/tb'
import { BsBootstrap} from 'react-icons/bs'
import { DiGit, DiReact } from 'react-icons/di'

const Skills = () => {

  return (
    <section id="skills" class="py-20"> 
      <div class='xl:max-w-7xl xl:mx-auto max-w-full pl-[8%] pr-[5%] pt-[5%]'>
      
      <h1 class="decoration-[#e9756b] text-[60px] mb-[20px] sm:text-[40px] sm:mt-[20px] xl:text-[70px]"> . Technology </h1>

      <p class="font-display text-[30px] mb-[2%] sm:text-[22px] sm:pl-[9%]  xl:text-[30px] xl:pl-[5%]">Tools I use to get the job done</p>

      <div class='grid grid-cols-4 gap-5 pt-[30px] sm:pl-[10%]'>

        <span><SiJavascript size={60}/> Javascript</span>
        <span><AiFillHtml5 size={60}/> HTML5</span>
        <span><IoLogoCss3 size={60}/> CSS3</span>
        <span><DiReact size={60}/> React</span>
        <span><SiJquery size={60}/> jQuery</span>
        <span><BsBootstrap size={60}/> Bootstrap</span>
        <span><TbBrandNextjs size={60}/> NextJS</span>
        <span><IoLogoNodejs size={60}/> NodeJS</span>
        <span><SiTailwindcss size={60}/> Tailwind CSS</span>
        <span><SiMongodb size={60}/> MongoDB</span>
        <span><SiExpress size={60}/> Express</span>
        <span><DiGit size={60}/> Git</span>

      </div>
      
      </div>
    </section>
  )
}

export default Skills
