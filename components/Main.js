import React from "react";
import { motion as m } from "framer-motion";

const Main = () => {
  return (
    <main className="pt-16 p-30 flex items-center w-auto expand">
      <div className="py-100 xl:max-w-7xl xl:mx-auto max-w-full pl-[5%] pr-[5%]">
        <div className="my-30 grid h-[85%] place-items-center pt-[10%] mt-[5px] text-[120px] xs:text-[34px] sm:text-[40px] xl:text-[40px] font-inter font-bold">
          <m.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 5 }}
          >
            👋 Hi! I'm Carmen.
          </m.h1>
          <m.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 5 }}
            className="text-[80px] font-inter xs:text-[18px] sm:text-[20px] pb-[60px] mt-[24px] xl:text-[30px]"
          >
            I am a
          </m.h2>
          <h1 className="pb-6 font-extrabold text-transparent text-5xl   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Frontend Developer
          </h1>
          <p className="text-2xl">
            with a passion for designing and building web-based user interfaces.
            When I'm not writing code you can find me planning my next travel
            adventure or looking for the best cheap eats in Toronto.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
