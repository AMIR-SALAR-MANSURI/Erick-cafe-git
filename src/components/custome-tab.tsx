// import React, { useState } from "react";

// const BottomBorderTab = () => {
//   const [isActive, setIsActive] = useState(1);

//   return (
//     <ul className="flex items-center gap-5">
//       <li
//         className={`${
//           isActive === 1 && "!border-[#3B9DF8] !text-[#3B9DF8]"
//         } px-6 py-2 border-b dark:text-[#abc2d3] text-[#424242] transition duration-300 border-transparent cursor-pointer`}
//         onClick={() => setIsActive(1)}
//       >
//         {" "}
//         Home
//       </li>
//       <li
//         className={`${
//           isActive === 2 && "!border-[#3B9DF8] !text-[#3B9DF8]"
//         } px-6 py-2 border-b dark:text-[#abc2d3] text-[#424242] transition duration-300 border-transparent cursor-pointer`}
//         onClick={() => setIsActive(2)}
//       >
//         {" "}
//         About
//       </li>
//       <li
//         className={`${
//           isActive === 3 && "!border-[#3B9DF8] !text-[#3B9DF8]"
//         } px-6 py-2 border-b dark:text-[#abc2d3] text-[#424242] transition duration-300 border-transparent cursor-pointer`}
//         onClick={() => setIsActive(3)}
//       >
//         {" "}
//         Support
//       </li>
//     </ul>
//   );
// };

// export default BottomBorderTab;
"use client";
import React, { useState } from "react";

export type Tabs =
  | "CoffeeBean"
  | "CoffeeBlender"
  | "Equipment"
  | "WaterBoiler"
  | "EquipmentCafe";

interface TabItem {
  key: Tabs;
  title: string;
  content: React.ReactNode;
}

interface Props {
  tabs: TabItem[];
}

const CustomeTab = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState<Tabs>(tabs[0].key);

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="w-full">
          {/* Mobile Select */}
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              className="w-full rounded-lg border bg-white px-3.5 py-2.5 text-base font-medium text-gray-900 shadow-sm outline outline-1 outline-gray-300 focus:outline-pink-500"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as Tabs)}
            >
              {tabs.map((tab) => (
                <option key={tab.key} value={tab.key}>
                  {tab.title}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <div
                className="-mb-px flex items-center justify-center gap-x-8 "
                role="tablist"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    role="tab"
                    aria-selected={activeTab === tab.key}
                    aria-controls={`${tab.key}-tab`}
                    className={`inline-flex border-b-2 px-1 py-3.5 text-sm font-semibold  ${
                      activeTab === tab.key
                        ? "border-primary text-black"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Panel Content */}
          <div className="mt-4">
            {tabs.map((tab) => (
              <div
                key={tab.key}
                id={`${tab.key}-tab`}
                role="tabpanel"
                aria-labelledby={tab.key}
                className={activeTab === tab.key ? "block" : "hidden"}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomeTab;
