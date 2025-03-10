import { Notebook } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const InfoHeader = () => {
  return (
    <div className="flex text-center justify-between h-20 mr-3 items-center">
      <div className="text-gray-700 flex gap-2">
        <div>
          <div className="text-[#9E624C] text-xl font-bold flex justify-end">
            -021
          </div>
          <div>5545555</div>
        </div>
        <div className="w-12 h-12 rounded-full bg-[#F2E5DA] flex items-center">
          <span className="items-center mx-auto">
            <Notebook className="text-[#9E624C]" />
          </span>
        </div>
      </div>
      <div>
        <Image src="/asset/Ericklogo.svg" alt="Logo" width={100} height={100} />
      </div>
      <div className="text-blue-500 flex items-center gap-2">
        <Button
          className="rounded-full text-black border-black font-bold"
          variant={"outline"}
        >
          ورود / ثبت نام
        </Button>
        <div className="w-12 h-12 rounded-full bg-[#9E624C] flex items-center justify-center">
          <Notebook className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
