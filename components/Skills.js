import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const backend = ["MongoDB", "Express", "NodeJS"];

  const frontend = [
    "React",
    "Nextjs",
    "Redux",
    "JQuery",
    "Bootstrap",
    "Git",
    "JavaScript",
    "TailwindCSS",
    "HTML/CSS",
  ];

  const tools = ["Postman", "Git"];

  return (
    <section id="Skills" className="py-20 font-inter">
      <div className="xl:max-w-7xl xl:mx-auto max-w-full pl-[10%] pr-[5%] pt-[8%]">
        <h1 className="decoration-4 font-black text-[60px] mb-[20px] sm:text-[30px] sm:mt-[20px] xl:text-[34px] font-playfair">
          Skills
        </h1>

        <p className="font-display text-[30px] mb-[2%] xs:text-[16px] sm:text-[22px] sm:pl-[9%]  xl:text-[30px] xl:pl-[5%]"></p>

        <div className="pt-[8%] pl-[8%]">
          <h2>Frontend:</h2>
          {frontend.map((skill, idx) => {
            return (
              <>
                <p
                  key={idx}
                  className="xs:text-[12px] sm:text-[12px] md:text-[18px] lg:text-[18px] pl-[8%]"
                >
                  <span className="xs:text-[20px] sm:text-[20px] md:text-[30px] lg:text=[40px]"></span>
                  <span>{skill}</span>
                </p>
              </>
            );
          })}
        </div>

        <motion.div
          className="pt-[8%] pl-[8%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 3 }}
        >
          Backend
        </motion.div>

        {backend.map((skill, i) => {
          return (
            <>
              <span
                key={i}
                className="xs:text-[12px] sm:text-[12px] md:text-[18px] lg:text-[18px] pl-[8%]"
              >
                <span className="xs:text-[20px] sm:text-[20px] md:text-[30px] lg:text=[40px]"></span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 3 }}
                >
                  {skill}
                </motion.span>
              </span>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
