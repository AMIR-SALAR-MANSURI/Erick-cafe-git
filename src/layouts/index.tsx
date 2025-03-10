"use client";
import React, { ReactNode } from "react";
import HeaderLayout from "./header";

const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HeaderLayout />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default LayoutMain;
