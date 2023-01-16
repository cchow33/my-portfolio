import React from 'react'
import { AiFillHtml5 }  from 'react-icons/ai'
import { IoLogoCss3, IoLogoNodejs }  from 'react-icons/io'
import { SiJavascript, SiTailwindcss, SiMongodb, SiJquery, SiExpress }  from 'react-icons/si'
import { TbBrandNextjs }  from 'react-icons/tb'
import { BsBootstrap} from 'react-icons/bs'
import { DiGit } from 'react-icons/di'

const Skills = () => {

  return (

    <section> 
      
      <h1 class='text-[60px]'>Technologies I use</h1>

      <div class='grid grid-cols-4 gap-4'>

        <span><SiJavascript size={60}/> Javascript</span>
        <span><AiFillHtml5 size={60}/> HTML5</span>
        <span><IoLogoCss3 size={60}/> CSS3</span>
        <span><SiJquery size={60}/> jQuery</span>
        <span><BsBootstrap size={60}/> Bootstrap</span>
        <span><TbBrandNextjs size={60}/> NextJS</span>
        <span><IoLogoNodejs size={60}/> NodeJS</span>
        <span><SiTailwindcss size={60}/> Tailwind CSS</span>
        <span><SiMongodb size={60}/> MongoDB</span>
        <span><SiExpress size={60}/> Express</span>
        <span><DiGit size={60}/> Git</span>

      </div>
    </section>
  )
}

export default Skills
