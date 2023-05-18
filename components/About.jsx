import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div class="xl:max-w-7xl xl:mx-auto max-w-full pl-[8%] pr-[5%] pt-[8%]">
        <h1 class="decoration-4 font-black underline decoration-[#ff5555] text-[60px] mb-[20px] sm:text-[40px] sm:mt-[20px] xl:text-[60px] font-poppins">
          About Me{" "}
        </h1>

        <Image
          src="/altru-project.png"
          // src="/photo.jpg"
          alt="profile"
          width="100"
          height="100"
          class="rounded-full border-gray-300 border-4"
          // class="border rounded-full border border-gray-300 border-4"
        />

        <p class="pt-[20px] text-[30px] font-display sm:text-[22px] px-[10px] xl:text-[30px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam earum
          ratione nobis autem culpa quidem, quod dolorum. Ex quidem omnis ipsam
          veritatis, commodi a suscipit aliquid! Fugit minus sint iste? Lour.
        </p>

        <div>
          <p class="mt-[20px] mb-[20px] text-[20px]">
            When I/m not coding, I/m:
          </p>
          <ul>
            <li class="font-display text-[20px] mt-[20px] xl:text-[26px]">
              🏃 training for a 10K
            </li>
            <li class="font-display text-[20px] xl:text-[26px]">
              🎙️ listening to a podcast{" "}
            </li>
            <li class="font-display text-[20px] xl:text-[26px]">
              🥪 looking for the best banh mi sandwiches in the city
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
