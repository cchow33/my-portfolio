import React from "react";
import Socials from "./Socials";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="font-jost xl:max-w-7xl xl:mx-auto max-w-full pl-[10%] pr-[10%] pt-[8%] bg-[length:100%_5px] bg-no-repeat">
        <div className="absolute left-0 w-full h-96 bg-gradient-to-br from-pink-300 to-[#a9c1e4] filter blur-3xl opacity-50 -z-50"></div>
        <h1 className="decoration-4 font-black text-[60px] mb-[20px] sm:text-[30px] sm:mt-[20px] xl:text-[34px]">
          Contact
        </h1>
        {/* <h1 className="bg-white">Contact</h1> */}

        <p
          className="font-jost pt-[20px] text-[20px] font-display sm:text-[18px]
          px-[10px] xl:text-[20px]"
        >
          Want to hire me or work on a project together? Email me and let's
          chat:
          <a
            href="mailto:reach.cchow@gmail.com"
            className="underline ml-2 mr-2"
          >
            reach.cchow@gmail.com
          </a>
          .
          <Socials />
        </p>
        <span className="text-center mt-[40px] mb-[40px] text-[14px] xs:text-[14px] xl:text-[14px] sm:pt-[20px] md:mb-[20px] lg:mb-[30px]">
          <p>© 2023 Designed and built by Carmen Chow</p>
        </span>
      </div>
    </section>
  );
};

export default Contact;
