import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiJquery,
  SiExpress,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { DiGit, DiReact } from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills" class="py-20">
      <div class="xl:max-w-7xl xl:mx-auto max-w-full pl-[8%] pr-[5%] pt-[8%]">
        <h1 class="decoration-4 font-black underline decoration-[#ff5555] text-[60px] mb-[20px] sm:text-[30px] sm:mt-[20px] xl:text-[34px] font-poppins">
          Technology
        </h1>

        <p class="font-display text-[30px] mb-[2%] sm:text-[22px] sm:pl-[9%]  xl:text-[30px] xl:pl-[5%]">
          Tools I use to
          <span class="pl-[8px] font-bold text-[#ff5555]">
            get the job done
          </span>
        </p>
        <div class="grid grid-cols-4 gap-5 pt-[8%] sm:pl-[10%]">
          <span>
            <SiJavascript size={40} /> Javascript
          </span>
          <span>
            <DiReact size={40} /> React
          </span>
          <span>
            <SiRedux size={40} /> Redux
          </span>
          <span>
            <AiFillHtml5 size={40} /> HTML5
          </span>
          <span>
            <IoLogoCss3 size={40} /> CSS3
          </span>
          <span>
            <SiJquery size={40} /> jQuery
          </span>
          <span>
            <BsBootstrap size={40} /> Bootstrap
          </span>
          <span>
            <TbBrandNextjs size={40} /> NextJS
          </span>
          <span>
            <IoLogoNodejs size={40} /> NodeJS
          </span>
          <span>
            <SiTailwindcss size={40} /> Tailwind CSS
          </span>
          <span>
            <SiMongodb size={40} /> MongoDB
          </span>
          <span>
            <SiExpress size={40} /> Express
          </span>
          <span>
            <DiGit size={40} /> Git/Github
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
