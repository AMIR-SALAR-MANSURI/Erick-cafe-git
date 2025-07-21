"use client";

import * as React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Percent } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-4">
      <Carousel
        dir="ltr"
        className="w-full max-w-[60%] relative"
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {Array.from({ length: 9 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              {" "}
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">

                <CardContent className="">
                  <Badge
                    className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-black text-white font-semibold"
                    variant="outline"
                  >
                    <Percent />
                    20
                  </Badge>
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              <Card className="hover:shadow-xl">
                <CardTitle className="-mt-2 px-4">
                  <Badge
                    className="h-6 min-w-6  rounded-full  bg-black text-white font-semibold text-sm"
                    variant="outline"
                  >
                    20
                    <Percent className="font-bold" />
                  </Badge>
                </CardTitle>
                <CardContent dir="rtl" className="basis-full lg:basis-1/3 md:">
                  <div className="flex flex-col space-y-3">
                    <div className="w-full h-full flex justify-center items-center">
                      <Image
                        src={"/asset/product.png"}
                        alt=""
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="font-bold text-md">
                      دانه قهوه باکسی برند Boxilian
                    </div>
                    <div className="text-gray-500 text-sm">دانه قهوه</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="line-through blur-[0.5px] text-lg ">
                      340,000
                    </div>
                    <div className="text-primary text-xl font-bold">
                      تومان 240,000
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-40px] top-1/2 -translate-y-1/2 bg-secondary" />
        <CarouselNext className="absolute right-[-40px] top-1/2 -translate-y-1/2 bg-secondary" />
      </Carousel>
    </div>
  );
}
