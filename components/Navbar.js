import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const links = ["About", "Projects", "Skills", "Contact"];
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="bg-white w-full h-16 fixed top-0 left-0 z-50 mb-200px font-inter">
      <div className="bg-white md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="flex-col">
          <p className="font-bold text-transparent text-[8px] sm:text-[10px] xl:text-[20px]  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            carmen | chow
          </p>
        </div>

        <div
          onClick={() => setNavbar(!navbar)}
          className="bg-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <CgMenuRight name={navbar ? <GrClose /> : "menu"} />
        </div>

        <ul
          className={`bg-white md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            navbar ? "top-20 " : "top-[-490px] "
          }`}
        >
          {links.map((link) => (
            <li key={link} className="md:ml-8 p-1 md:my-0 my-7 ">
              <a
                href={`#${link}`}
                className="font-bold relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gradient-to-r from-purple-500 via-pink-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:translate-y-1 transition duration-500 ease-in-out"
              >
                {link}{" "}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
