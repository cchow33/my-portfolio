import React from "react";
import { motion as m } from "framer-motion";

const Skills = () => {
  const skills = [
    "React",
    "Nextjs",
    "Redux",
    "JQuery",
    "Bootstrap",
    "Git",
    "JavaScript",
    "TailwindCSS",
    "HTML/CSS",
    "MongoDB",
    "Express",
    "NodeJS",
  ];

  return (
    <section id="Skills" className="py-20 font-inter">
      <div className="xl:max-w-7xl xl:mx-auto max-w-full pl-[10%] pr-[5%] pt-[8%]">
        <h1 className="decoration-4 font-black text-[60px] mb-[20px] sm:text-[30px] sm:mt-[20px] xl:text-[34px] font-playfair">
          Skills
        </h1>

        <p className="font-display text-[30px] mb-[2%] xs:text-[16px] sm:text-[22px] sm:pl-[9%]  xl:text-[30px] xl:pl-[5%]"></p>

        {skills.map((skill, i) => (
          <m.div
            key={i}
            className="pt-[2%] pl-[8%] xs:text-[12px] sm:text-[12px] md:text-[18px] lg:text-[18px] pl-[8%]"
            initial={{
              opacity: 0,
              // translateX: -50,
              // translateY: -50,
              translateX: i % 2 === 0 ? -50 : 50,
              translateY: -50,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
          >
            <span>{skill}</span>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
