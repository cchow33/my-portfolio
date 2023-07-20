import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { motion as m } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const links = ["About", "Projects", "Skills", "Contact"];
  const [navbar, setNavbar] = useState(false);

  const handleCloseMenu = () => {
    setNavbar(false);
  };
  return (
    <div className="font-jost w-full h-16 fixed top-0 left-0 z-50 mb-200px bg-white">
      <div className="bg-white md:flex items-center justify-between py-4 md:px-10 px-7">
        <span class="flex-col hover:translate-y-1 transition duration-500 ease-in-out">
          <a
            target="_blank"
            href="mailto:reach.cchow@gmail.com"
            rel="noopener noreferrer"
            className="font-bold text-transparent text-[8px] sm:text-[14px] xl:text-[16px]  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "
          >
            carmen | chow
          </a>
        </span>

        <div
          onClick={() => setNavbar(!navbar)}
          className=" bg-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {navbar ? <GrClose size={18} /> : <CgMenuRight />}
        </div>

        <ul
          className={`${navbar ? "block" : "hidden"}          
          bg-white md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 h-screen md:h-auto transition-all duration-500 ease-in`}
        >
          {links.map((link, i) => (
            <m.div
              key={link}
              className="bg-white md:ml-8 md:my-0 my-7 text-gray-900 text-sm py-2.5 mb-2 hover:translate-y-1 transition duration-500 ease-in-out"
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Link
                href={`#${link}`}
                onClick={handleCloseMenu}
                class="relative inline-block px-2 font-medium group m-[2px] bg-white  selection: xs:text-[20px] sm:text-[20px] md:text-[18px] lg:text-[20px]"
              >
                {link}
              </Link>
            </m.div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
