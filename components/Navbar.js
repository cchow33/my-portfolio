import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const links = ["About", "Projects", "Skills", "Contact"];
  const [navbar, setNavbar] = useState(false);

  // <div class="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1"></div>

  return (
    <div className="w-full h-16 fixed top-0 left-0 z-50 mb-200px">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <span class="flex-col">
          <p class="font-bold text-transparent text-[8px] sm:text-[10px] xl:text-[30px]  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            carmen | chow
          </p>
        </span>

        <div
          onClick={() => setNavbar(!navbar)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <CgMenuRight className={navbar ? <GrClose /> : "menu"} />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            navbar ? "top-20 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link}
              className="md:ml-8 p-1 md:my-0 my-7 text-gray-900 bg-white border border-gray-300 focus:outline-none hover: font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 hover:translate-y-1 transition duration-500 ease-in-out"
            >
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
