import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="About">
      <div className="xl:max-w-7xl xl:mx-auto max-w-full pl-[8%] pr-[5%] pt-[8%] bg-[length:100%_5px] bg-no-repeat">
        <h1 className="decoration-4 font-black text-[60px] mb-[20px] sm:text-[30px] sm:mt-[20px] xl:text-[34px] font-playfair">
          About Me
        </h1>
        <Image src="/greece.jpg" alt="profile" width="500" height="400" />
        <p className="pt-[20px] text-[30px] font-display sm:text-[22px] px-[10px] xl:text-[30px]">
          I'm a Frontend Developer based in Toronto, Canada who enjoys problem
          solving and building user-centred beautiful UI. Lifelong learning and
          self-improvement. readable, modular, scalable code. I'm a lifelong
          learner who values teamwork, empathy and communication. Looking to
          work on a missions-driven team.
        </p>
        <div>
          <p className="mt-[20px] mb-[20px] text-[20px]">
            When I'm not writing or debugging code, I'm:
          </p>
          <ul>
            <li className="font-display text-[20px] mt-[20px] xl:text-[26px]">
              🏃 training for a 10K
            </li>
            <li className="font-display text-[20px] xl:text-[26px]">
              🎙️ listening to a podcast
            </li>
            <li className="font-display text-[20px] xl:text-[26px]">
              🌱 starting a vegetable garden on my balcony
            </li>
            <li className="font-display text-[20px] xl:text-[26px]">
              🥪 looking for the best banh mi sandwiches in the city
            </li>
          </ul>
          <Image src="/map.png" alt="profile" width="500" height="400" />
          <a href="https://www.freepik.com/free-vector/blue-watercolor-map-world_20157123.htm#query=watercolor%20world%20map&position=3&from_view=search&track=ais#position=3&query=watercolor%20world%20map">
            Image by Vectonauta
          </a>
          on Freepik
        </div>
      </div>
    </section>
  );
};

export default About;
