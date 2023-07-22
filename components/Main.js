import React from "react";
import { motion as m } from "framer-motion";

const Main = () => {
  return (
    <main className="h-[100%] font-jost py-[20%] md:pt-[15%] lg:pt-[8%] flex items-center">
      <div className="py-100 xl:max-w-7xl xl:mx-auto max-w-full ">
        <div className="my-30 grid h-[85%] items-center pb-[15%] mt-[5px] text-[120px] xs:text-[34px] sm:text-[40px] xl:text-[40px] font-bold">
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 5 }}
            className="font-jost xl:max-w-7xl xl:mx-auto max-w-full pl-[10%] pr-[10%] pt-[30%] bg-[length:100%_5px] bg-no-repeat lg:text-[80px] lg:pt-[20%]"
          >
            Carmen Chow
          </m.p>
          <m.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 5 }}
            className="font-jost  xl:mx-auto max-w-full pt-[8%] sm:text-[60px] lg:text-[80px] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 xs:pl-[10%] sm:pl-[10%] lg:pl-[0%]"
          >
            Frontend Developer
          </m.h1>
        </div>
      </div>
    </main>
  );
};

export default Main;
