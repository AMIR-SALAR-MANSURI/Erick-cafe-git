import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const NavHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: isSticky ? 0 : 10,
        opacity: 1,
        boxShadow: isSticky
          ? "0px 4px 10px rgba(0, 0, 0, 0.1)"
          : "0px 0px 0px rgba(0, 0, 0, 0)",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className={`${
        isSticky ? "fixed top-4 z-10" : "relative"
      } bg-[#28221E] max-w-[1526px] mx-auto w-full h-16 rounded-full p-5`}
    >
      <nav className="flex justify-between items-center h-full">
        <div className="text-white flex gap-6">
          <span>test</span>
          <span>test</span>
          <span>test</span>
          <span>test</span>
        </div>
        <div className="items-center flex">
          <Button
            variant={"link"}
            className="rounded-full bg-white backdrop-blur-0 border border-white/20"
          >
            Erick.Cafe
          </Button>
        </div>
      </nav>
    </motion.div>
  );
};
