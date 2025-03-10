"use client";
import InfoHeader from "@/components/info-header";
import { NavHeader } from "@/components/navHeader";
import React from "react";

function HeaderLayout() {
  return (
    <>
      <div className="w-full items-center max-w-[1526px] mx-auto">
        <InfoHeader />
        <NavHeader />
      </div>
    </>
  );
}

export default HeaderLayout;
