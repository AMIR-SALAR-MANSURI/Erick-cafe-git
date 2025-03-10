"use client";
import InfoHeader from "@/components/info-header";
import { NavHeader } from "@/components/navHeader";
import React from "react";

function HeaderLayout() {
  return (
    <>
      <InfoHeader />
      <NavHeader />
    </>
  );
}

export default HeaderLayout;
