import React from "react";

const Contact = () => {
  return (
    <section
      id="Contact"
      class="place-items-center bg-[#fcf2f1] flex items-center w-full"
    >
      <div class="xl:max-w-7xl xl:mx-auto max-w-full pl-[8%] pr-[5%] py-[10%]">
        <h1 class="decoration-4 font-black underline decoration-[#ff5555] text-[60px] mb-[20px]  xs:text-[20px]  sm:text-[30px] sm:mt-[20px] xl:text-[34px] font-poppins">
          Contact
        </h1>
        <p class="font-display text-[20px] leading-loose  xs:text-[14px] sm:text-[18px] xl:text-[18px]">
          Have a question or an opportunity? <br></br>Email me at
          <a href="mailto:reach.cchow@gmail.com" class="underline ml-2 mr-2">
            reach.cchow@gmail.com
          </a>
          and let's chat!
        </p>
      </div>
    </section>
  );
};

export default Contact;
