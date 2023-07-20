import React from "react";
import { motion as m } from "framer-motion";

const Transitions = () => {
  return (
    <>
      <m.div
        className="fixed top-0 left-0 w-full bg-gradient-to-br from-pink-300 to-[#a9c1e4] filter blur-3xl opacity-50"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 1 }}
      ></m.div>
    </>
  );
};

export default Transitions;
