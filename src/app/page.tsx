"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import CardCustome from "@/components/custome-card";
import CustomeTab, { Tabs } from "@/components/custome-tab";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Banner Images */}
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-3">
        <div className="w-full lg:w-1/3">
          <Image
            src="/asset/banner2.svg"
            alt="Logo"
            width={610}
            height={441}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="w-full lg:w-2/3">
          <Image
            src="/asset/Erick-cafe2.svg"
            alt="Logo"
            width={1400}
            height={441}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="bg-[#F2E5DA] mt-8 p-5 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="max-w-[100vw] overflow-hidden">
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                spaceBetween: 30,
              },
              1024: {
                spaceBetween: 40,
              },
            }}
          >
            {[...Array(10)].map((_, i) => (
              <SwiperSlide key={i} style={{ width: "auto" }}>
                <Image
                  src="/asset/Erick.svg"
                  alt={`Logo ${i}`}
                  width={120}
                  height={25}
                  className="w-24 md:w-32 h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Product Categories */}
      <div className="mt-10 px-4">
        <div className="flex items-center gap-4">
          <div className="w-12 md:w-16">
            <Image
              src="/asset/coffee-bean.svg"
              alt="Coffee Bean"
              width={62}
              height={62}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold">دسته بندی محصولات</h3>
            <p className="text-sm md:text-base">
              از میان بهترین ها ، بهترین هارا برای شما فراهم کرده ایم!
            </p>
          </div>
        </div>

        <div className="w-full mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4">
          <CardCustome />
        </div>
      </div>

      {/* Discount Section */}
      {/* <div className="relative mt-10 mx-4">
        <div className="relative w-full aspect-[1353/568]">
          <Image
            src="/asset/discount.svg"
            alt="Discount Banner"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full h-full bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-4">
            <CustomeTab />
            <div role="tablist" className="tabs tabs-border flex-wrap">
              <a role="tab" className="tab text-sm md:text-base">
                Tab 1
              </a>
              <a role="tab" className="tab tab-active text-sm md:text-base">
                Tab 2
              </a>
              <a role="tab" className="tab text-sm md:text-base">
                Tab 3
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative flex justify-center mt-10">
        <div className="w-full max-w-[1353px] aspect-[1353/568]">
          <Image
            src="/asset/discount.svg"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>
        <div
          className="absolute top-1/4 w-[90%] max-w-[1200px] aspect-[1200/600] flex items-center justify-center bg-opacity-80 text-white text-2xl font-bold rounded-xl shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="absolute w-[calc(100%-20px)] h-[calc(100%-20px)] flex justify-center bg-white text-white text-2xl font-bold rounded-lg shadow-lg">
            <div className="w-full px-10">
              <CustomeTab tabs={tabData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const tabData = [
  {
    key: "CoffeeBean" as Tabs,
    title: "Coffee Bean",
    content: (
      <div className="flex justify-center items-center">
        Content for the blender here.
      </div>
    ),
  },
  {
    key: "CoffeeBlender" as Tabs,
    title: "Coffee Blender",
    content: (
      <div className="flex justify-center items-center">
        Content for the blender here.
      </div>
    ),
  },
  {
    key: "Equipment" as Tabs,
    title: "Equipment",
    content: (
      <div className="flex justify-center items-center">
        Content for the blender here.
      </div>
    ),
  },
  {
    key: "test" as Tabs,
    title: "Coffee Blender",
    content: (
      <div className="flex justify-center items-center">
        Content for the blender here.
      </div>
    ),
  },
  {
    key: "test1" as Tabs,
    title: "Equipment",
    content: (
      <div className="flex justify-center items-center">
        Content for the blender here.
      </div>
    ),
  },
];
