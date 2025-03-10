"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const images = Array.from({ length: 20 }, (_, i) => ({
    src: `/asset/Erick.svg`,
    alt: `Image ${i + 1}`,
  }));

  return (
    <div>
      <div className="flex">
        {/* Centered Images */}
        <div className="flex-grow mt-8 max-w-[1526px] mx-auto flex items-center justify-center gap-3">
          <Image
            src="/asset/banner2.svg"
            alt="Logo"
            width={610}
            height={441} // Adjust based on actual dimensions
          />
          <Image
            src="/asset/Erick-cafe2.svg"
            alt="Logo"
            width={1400}
            height={441} // Adjust based on actual dimensions
          />
        </div>

        {/* Branch Image at the Bottom */}
        {/* <div className="flex justify-center mb-4">
          <Image
            src="/asset/branch.svg"
            alt="Logo"
            width={200}
            height={55} // Adjust based on actual dimensions
          />
        </div> */}
      </div>

      <div className="max-w-full overflow-hidden bg-[#F2E5DA] mt-8 p-5">
        {/* <div className="flex overflow-x-hidden animate-scroll"> */}
        <div className="flex overflow-x-hidden gap-3">
          {images.map((image, index) => (
            // <motion.div
            //   key={index}
            //   className="flex-shrink-0"
            //   style={{ width: "113px", height: "auto" }}
            //   initial={{ x: "-100%" }} // Initial position off-screen
            //   animate={{ x: 0 }} // Animate to the original position
            //   transition={{
            //     duration: 0.5, // 500ms transition speed
            //     delay: index * 0.5, // Delay each image's animation to slide in sequentially
            //   }}
            // >
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={113}
              height={25}
              className="object-contain mr-1"
            />
            // </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full items-center max-w-[1526px] mx-auto">
        <div className="mt-5 gap-2 flex items-center">
          <div className="items-center">
            <Image
              src="/asset/coffee-bean.svg"
              alt="Logo"
              width={62}
              height={62} // Adjust based on actual dimensions
            />{" "}
          </div>
          <div>
            <h3 className="">دسته بندی محصولات</h3>
            <span>
              از میان بهترین ها ، بهترین هارا برای شما فراهم کرده ایم!
            </span>
          </div>
        </div>
        <div className="flex gap-20 mt-10">
          <CardCustome text="قهوه ساز ها" src="/cardLogo/bean-coffee.svg" />
          <CardCustome text="آسیاب قهوه" src="/cardLogo/blender.svg" />
          <CardCustome text="ابزار باریستا" src="/cardLogo/eqiupment.svg" />
          <CardCustome text="دم آوری قهوه" src="/cardLogo/coffee.svg" />
          <CardCustome
            text="تجهیزات بار سرد"
            src="/cardLogo/equipment-bar.svg"
          />
          <CardCustome text="کرپ ساز صنعتی" src="/cardLogo/contrast.svg" />
          <CardCustome text="بویلر آب جوش" src="/cardLogo/water.svg" />
          <CardCustome text="سماور صنعتی" src="/cardLogo/smart-boiler.svg" />
          <CardCustome text="شو کیک" src="/cardLogo/cake.svg" />
          <CardCustome text="" src="/cardLogo/bean-coffee.svg" />
          {/* Add more cards as needed */}
        </div>{" "}
        <div className="relative flex justify-center mt-10">
          <Image
            src="/asset/discount.svg"
            alt="Logo"
            width={1353}
            height={568}
            className="object-cover"
          />
          <div
            className="absolute flex items-center justify-center bg-opacity-80 mt-28 text-white text-2xl font-bold rounded-xl shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
              backdropFilter: "blur(10px)", // Glass effect
              width: "1200px",
              height: "600px",
            }}
          >
            <div
              className="absolute  flex  justify-center  bg-white text-white text-2xl font-bold rounded-lg shadow-lg"
              style={{ width: "1183px", height: "572px" }}
            >
              <div className="w-full p-3">
                {/* <Tabs
                  tabs={[
                    { label: "Tab 1", content: <div>Content for Tab 1</div> },
                    { label: "Tab 2", content: <div>Content for Tab 2</div> },
                    { label: "Tab 3", content: <div>Content for Tab 3</div> },
                  ]}
                /> */}

                <div role="tablist" className="tabs tabs-border">
                  <a role="tab" className="tab">
                    Tab 1
                  </a>
                  <a role="tab" className="tab tab-active">
                    Tab 2
                  </a>
                  <a role="tab" className="tab">
                    Tab 3
                  </a>
                </div>

                <br className="h-[3px] bg-red-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CardCustome = ({ text, src }: { text: string; src: string }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-[86px] h-[107px] border rounded-lg  border-gray-300 flex flex-col gap-20 items-center justify-center text-center">
          {/* Icon centered */}
          <Image src={src} alt="Icon" width={40} height={40} />
          {/* Text at the bottom */}
        </div>
        <p className="text-gray-600 mt-3 font-bold text-nowrap">{text}</p>
      </div>
    </>
  );
};

const Tabs = ({ tabs }: { tabs: any }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200 relative">
        {tabs.map((tab: any, index: any) => (
          <button
            key={index}
            className={`px-4 py-2 text-gray-600 focus:outline-none transition relative ${
              activeTab === index
                ? "text-blue-500 font-semibold"
                : "hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
        <div
          className="absolute bottom-0 h-1 bg-blue-500 transition-all duration-300 ease-in-out"
          style={{
            width: `${100 / tabs.length}%`,
            left: `${(100 / tabs.length) * activeTab}%`,
          }}
        ></div>
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};
