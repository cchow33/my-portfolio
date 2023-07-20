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
    <section id="Skills">
      <div className="font-jost xl:max-w-7xl xl:mx-auto max-w-full px-[10%] py-[20%] bg-[length:100%_5px] bg-no-repeat">
        <h1 className="decoration-4 font-black text-[60px] mb-[20px] sm:text-[30px] sm:mt-[20px] xl:text-[34px]">
          Skills
        </h1>

        <div className="grid grid-cols-3 xs:grid-cols-4">
          {skills.map((skill, i) => (
            <m.div
              key={i}
              className="pt-[2%] pl-[8%] xs:text-[12px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[20px]"
              initial={{
                opacity: 0,
                translateX: -50,
                translateY: -50,
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
      </div>
    </section>
  );
};

export default Skills;
