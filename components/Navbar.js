import { React, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const links = ["Skills", "Projects", "Contact"];

  return (
    <header class="h-[100%] p-8 bg-[#fcf2f1]">
      <div class="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full bg-[#fcf2f1] text-black navbar navbar-expand-lg navbar-light">
        <span class="flex-col">
          <p class="text-[#e9756b] font-black pb-[10%] xs: text-[8px] sm:text-[10px] xl:text-[30px]">
            carmen | chow
          </p>
        </span>

        <nav class="flex items-center w-auto">
          <ul className="md:flex items-center w-auto list none text-[25px]">
            {links.map((link) => (
              <a
                href={`#${link}`}
                key={link}
                class="relative inline-block px-3 py-1 font-medium group m-[10px]  selection: xs:text-[12px] sm:text-[14px] md:text-[18px] lg:text-[20px]"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0  rounded-[10px]"></span>

                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black  rounded-[10px]"></span>

                <span class="relative text-black group-hover:text-white">
                  {link}
                </span>
              </a>
            ))}
          </ul>

          <button>
            <GrClose size={20} />
          </button>
        </nav>
        <button>
          <CgMenuRight size={46} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;