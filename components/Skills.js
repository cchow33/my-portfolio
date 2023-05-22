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
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { DiGit, DiReact } from "react-icons/di";

const Skills = () => {
  const skills = [
    {
      items: [
        {
          icons: DiReact,
          text: "React",
        },
        {
          icons: TbBrandNextjs,
          text: "Nextjs",
        },

        {
          icons: SiRedux,
          text: "Redux",
        },
        {
          icons: SiMongodb,
          text: "MongoDB",
        },

        {
          icons: SiJquery,
          text: "JQuery",
        },
        {
          icons: SiExpress,
          text: "Express",
        },

        {
          icons: BsBootstrap,
          text: "Bootstrap",
        },
        {
          icons: DiGit,
          text: "Git",
        },
        {
          icons: SiJavascript,
          text: "JavaScript",
        },

        {
          icons: SiTailwindcss,
          text: "Tailwind CSS",
        },
      ],
    },
  ];

  return (
    <section id="skills" class="py-20">
      <div class="xl:max-w-7xl xl:mx-auto max-w-full pl-[10%] pr-[5%] pt-[8%]">
        <h1 class="decoration-4 font-black underline decoration-[#ff5555] text-[60px] mb-[20px] xs:text-[20px] sm:text-[22px] sm:mt-[20px] xl:text-[34px] font-poppins">
          Skills
        </h1>

        <p class="font-display text-[30px] mb-[2%] xs:text-[16px] sm:text-[22px] sm:pl-[9%]  xl:text-[30px] xl:pl-[5%]">
          Tools I use to
          <span class="pl-[8px] font-bold text-[#ff5555]">
            get the job done
          </span>
        </p>

        <div class="grid grid-cols-4 gap-5 pt-[8%] xs:grid grid-cols-3 gap-5">
          {skills.map((e, i) => {
            return (
              <>
                {e.items.map((e, i) => {
                  return (
                    <span
                      key={i}
                      class="xs:text-[12px] sm:text-[12px] md:text-[18px] lg:text-[18px]"
                    >
                      <span class="xs:text-[20px] sm:text-[20px] md:text-[30px] lg:text=[40px]">
                        <e.icons />
                      </span>
                      <span>{e.text}</span>
                    </span>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
