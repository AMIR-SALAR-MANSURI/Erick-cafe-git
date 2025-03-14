"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

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
    <>
      <motion.header
        className={cn(
          // isSticky ? "fixed" : "sticky top-4 ",
          "bg-[#28221E] max-w-[1526px] sticky top-6 mx-auto w-full h-16 rounded-full p-5"
        )}
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
      </motion.header>
    </>
  );
};
