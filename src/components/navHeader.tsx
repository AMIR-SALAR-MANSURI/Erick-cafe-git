"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const NavHeader = () => {
  return (
    <>
      <motion.header
        className={cn(
          // isSticky ? "fixed" : "sticky top-4 ",
          "bg-[#28221E] sticky top-6 mx-auto w-full h-16 rounded-full p-5   md:max-w-[1526px] lg:w-full xl:w-full"
        )}
      >
        <nav className="flex justify-between items-center h-full">
          <div className="text-white flex gap-6">
            <span>test</span>
            <span>test</span>
            <span>test</span>
            <span>test</span>
          </div>
          <div className="items-center">
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
