import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const links = ["Projects", "Skills", "Contact"];

  const [navbar, setNavbar] = useState(false);

  return (
    <div className="shadow-md w-full h-16 fixed top-0 left-0 z-50 mb-200px">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <span class="flex-col">
          <p class="text-[#e9756b] font-black pb-[10%] xs: text-[8px] sm:text-[10px] xl:text-[30px]">
            carmen | chow
          </p>
        </span>

        <div
          onClick={() => setNavbar(!navbar)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <CgMenuRight name={navbar ? <GrClose /> : "menu"} />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            navbar ? "top-20 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={`#${link}`}
                class="relative inline-block px-2 font-medium group m-[2px]  selection: xs:text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px]"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
