import React from "react";
import Socials from "./Socials";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="pl-[10%] pr-[5%] pt-[18%] bottom-0 left-0 w-full h-96"
    >
      <div>
        {/* <div className="absolute left-0 w-full h-96 bg-gradient-to-br from-pink-300 to-[#a9c1e4] filter blur-3xl opacity-50 -z-50"></div> */}
        <div className="bg-black"></div>
        {/* <h1 className="decoration-4 font-black text-[60px] mb-[20px] sm:text-[30px] sm:mt-[20px] xl:text-[34px] font-playfair">
          Contact
        </h1> */}
        {/* <h1 className="bg-white">Contact</h1> */}

        <p
          className="font-display text-[20px] 
      leading-loose  
      xs:text-[20px] sm:text-[22px] sm:mt-[20px] xl:text-[26px] font-playfair"
        >
          Want to work with me on a project? Send me an email at:
          <a
            href="mailto:reach.cchow@gmail.com"
            className="underline ml-2 mr-2"
          >
            reach.cchow@gmail.com
          </a>
          <Socials />
        </p>
        <span className="mt-[40px] mb-[40px] font-display text-[14px]  xs:text-[10px] xl:text-[14px]">
          2023 Designed and built by Carmen Chow
        </span>
      </div>
    </section>
  );
};

export default Contact;
