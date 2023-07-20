import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="sm:flex pb-[15%] md:flex px-[0%] py-[5%]">
      <a
        target="_blank"
        href="mailto:reach.cchow@gmail.com"
        rel="noopener noreferrer"
        className="relative inline-block px-1 py-1 font-medium group m-[10px] "
      >
        <MdOutlineMailOutline
          className="hover:translate-y-1 transition duration-500 ease-in-out "
          size={28}
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
          size={26}
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
          size={26}
        />
      </a>
    </div>
  );
};

export default Socials;
