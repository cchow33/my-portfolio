import React from "react";
import { motion as m } from "framer-motion";

const Main = () => {
  return (
    <main className="font-jost pt-16 p-30 flex items-center">
      <div className="py-100 xl:max-w-7xl xl:mx-auto max-w-full ">
        <div className="my-30 grid h-[85%] items-center pt-[10%] pb-[15%] mt-[5px] text-[120px] xs:text-[34px] sm:text-[40px] xl:text-[40px] font-bold pt-[5%]">
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 5 }}
            className="font-jost xl:max-w-7xl xl:mx-auto max-w-full pl-[10%] pr-[10%] pt-[30%] bg-[length:100%_5px] bg-no-repeat lg:text-[80px] lg:pt-[20%]"
          >
            Carmen Chow
          </m.p>
          <m.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 5 }}
            className="sm:text-[60px] font-jost xl:max-w-7xl xl:mx-auto max-w-full pt-[8%] lg:text-[80px] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Frontend Developer
          </m.h1>
          {/* <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 5 }}
            className="sm:italic text-[18px] font-jost xl:max-w-7xl xl:mx-auto max-w-full pl-[10%] pr-[10%] pt-[8%] pb-[40%] bg-[length:100%_5px] bg-no-repeat"
          >
            Turning ideas into code one line at a time ...
          </m.p> */}
        </div>
      </div>
    </main>
  );
};

export default Main;
