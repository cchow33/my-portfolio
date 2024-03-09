import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const skills = [
    "React",
    "Nextjs",
    "Redux",
    "JQuery",
    "Bootstrap",
    "Git",
    "Typescript",
    "React Native",
    "JavaScript",
    "NodeJS", .
    "HTML/CSS",
    "MongoDB",
    "Express",
    "TailwindCSS",
  ];

  return (
    <section id="Skills">
      <div className="font-jost lg:pt-[10%] pl-[10%] xl:max-w-7xl xl:mx-auto max-w-full bg-[length:100%_5px] bg-no-repeat xs:pt-[50%] xs:pb-[66%] ">
        <h1 className="h-full decoration-4 font-black text-[60px] mb-[20px] xs:text-[30px] sm:mt-[20px] xl:text-[34px]">
          Skills
        </h1>

        <div className="sm:grid grid-cols-3 xs:grid-cols-2">
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
