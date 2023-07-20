import React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.section id="About" className="mb-[40px]">
      <div className="font-jost xl:max-w-7xl xl:mx-auto max-w-full pl-[10%] pr-[10%] pt-[10%] bg-[length:100%_5px] bg-no-repeat">
        <h1 className="decoration-4 font-black text-[60px] mb-[20px] sm:text-[30px] sm:mt-[20px] xl:text-[34px]">
          About Me
        </h1>
        <div className="md:grid grid-cols-2 gap-8 sm:flex sm:flex-col">
          <m.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75, ease: "easeOut" }}
          >
            <Image src="/greece.jpg" alt="profile" width="500" height="400" />
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75, ease: "easeInOut" }}
            className="col-span-1 font-jost text-[20px] font-display sm:text-[18px] px-[10px] xl:text-[20px]"
          >
            I'm a Toronto-based developer interested in problem-solving and
            building user-centred, beautiful user interfaces. Drawing on my
            previous career in education, I approach design and code with the
            end-user in mind, and strive to craft positive digital experiences.
            I value being part of teams that promote empathy, trust and
            communication. When I'm not bringing my ideas to life through code,
            I can often be found listening to podcasts, discovering great eats
            in Toronto, and training for my next 5K or 10K race.
          </m.p>
        </div>
      </div>
    </m.section>
  );
};

export default About;
