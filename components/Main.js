import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";

const Main = () => {
  return (
    <div class="bg-[#eff0ff] pt-16">
      <main class="pt-16 p-30 flex items-center w-auto expand">
        <div class="py-100 xl:max-w-7xl xl:mx-auto max-w-full pl-[5%] pr-[5%]">
          <div class="my-30 grid h-[85%] place-items-center">
            <Image
              src="/photo.jpg"
              alt="profile"
              width="150"
              height="150"
              class="rounded-full border-gray-300 border-4"
            />
            <h1 class="mt-[5px] text-[120px] xs:text-[34px] sm:text-[40px] xl:text-[40px] font-playfair font-bold">
              Carmen Chow
            </h1>
            <h2 class="text-[80px] font-display xs:text-[18px] sm:text-[20px] pb-[60px] mt-[24px] xl:text-[30px]">
              I am
              <span class="text-[#e9756b] ml-[7px] mr-[7px]">
                Front-end Developer
              </span>
              with a passion for designing and building web-based user
              interfaces. When I'm not writing code you can find me planning my
              next travel adventure or looking for the best cheap eats in
              Toronto.
            </h2>

            <div class="flex pt-[0%] pb-[10%]">
              <a
                target="_blank"
                href="mailto:reach.cchow@gmail.com"
                rel="noopener noreferrer"
                class="relative inline-block px-1 py-1 font-medium group m-[10px]"
              >
                <MdEmail size={36} />
              </a>

              <a
                target="_blank"
                href="https://github.com/cchow33"
                rel="noopener noreferrer"
                class="relative inline-block px-1 py-1 font-medium group m-[10px]"
              >
                <BsGithub size={30} />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/carmen-cchow/"
                rel="noopener noreferrer"
                class="relative inline-block px-1 py-1 font-medium group m-[10px]"
              >
                <BsLinkedin size={30} />
              </a>

              {/* <a
                target="_blank"
                href="https://drive.google.com/file/d/13UZxgVMTDyZklTF3JHaHPQY7pl8LJ9Qk/view?usp=sharing"
                rel="noopener noreferrer"
                class="relative inline-block px-1 py-0 font-medium group m-[10px]"
              >
                <HiDocumentText size={34} />
              </a> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
