import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

const Socials = () => {
  return (
    <div className="flex pt-[0%] pb-[10%]">
      <a
        target="_blank"
        href="mailto:reach.cchow@gmail.com"
        rel="noopener noreferrer"
        className="relative inline-block px-1 py-1 font-medium group m-[10px] "
      >
        <MdOutlineMailOutline
          className="hover:translate-y-1 transition duration-500 ease-in-out"
          size={24}
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/cchow33"
        rel="noopener noreferrer"
        className="relative inline-block px-1 py-1 font-medium group m-[10px]"
      >
        <BsGithub
          className="hover:translate-y-1 transition duration-500 ease-in-out"
          size={24}
        />
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/carmen-cchow/"
        rel="noopener noreferrer"
        className="relative inline-block px-1 py-1 font-medium group m-[10px]"
      >
        <FaLinkedinIn
          className="hover:translate-y-1 transition duration-500 ease-in-out"
          size={24}
        />
      </a>
      {/* <a
        target="_blank"
        href="https://drive.google.com/file/d/13UZxgVMTDyZklTF3JHaHPQY7pl8LJ9Qk/view?usp=sharing"
        rel="noopener noreferrer"
        className="relative inline-block px-1 py-0 font-medium group m-[10px]"
      >
        <HiDocumentText size={24} />
      </a> */}
    </div>
  );
};

export default Socials;
