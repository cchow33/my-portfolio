import React from "react";

const Contact = () => {
  return (
    <section id="Contact" class="bg-[#eff0ff] pl-[10%] pr-[5%] pt-[8%]">
      <h1 class="decoration-4 font-black underline decoration-[#ff5555] text-[60px] mb-[20px] xs:text-[20px] sm:text-[22px] sm:mt-[20px] xl:text-[34px] font-poppins">
        Contact
      </h1>

      <p
        class="font-display text-[20px] 
      leading-loose  
      xs:text-[20px] sm:text-[22px] sm:mt-[20px] xl:text-[26px] font-poppins"
      >
        Have a question or want to get in touch with me? I can be reached at
        <a href="mailto:reach.cchow@gmail.com" class="underline ml-2 mr-2">
          reach.cchow@gmail.com
        </a>
      </p>
    </section>
  );
};

export default Contact;
