import React from 'react'
import { AiFillHtml5 }  from 'react-icons/ai'
import { IoLogoCss3, IoLogoNodejs }  from 'react-icons/io'
import { SiJavascript }  from 'react-icons/si'
import { TbBrandNextjs }  from 'react-icons/tb'

const Skills = () => {


  return (
    <section>
      <SiJavascript size={60}/> Javascript
      <AiFillHtml5 size={60}/> HTML5
      <IoLogoCss3 size={60}/> CSS3
      <TbBrandNextjs size={60}/> NextJS
      <IoLogoNodejs size={60}/> NodeJS
    </section>
  )
}

export default Skills
