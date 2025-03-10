"use client";
import React, { ReactNode } from "react";
import HeaderLayout from "./header";

const LayoutMain = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderLayout />
      <main>{children}</main>
    </>
  );
};

export default LayoutMain;
