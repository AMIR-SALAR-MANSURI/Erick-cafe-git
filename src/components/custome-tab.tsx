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

import React, { useState } from "react";

const CustomeTab = () => {
  const [tab, setTab] = useState<string>("");
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="w-full">
          <div className="sm:hidden">
            <label form="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              className="w-full appearance-none rounded-lg border-none bg-white px-3.5 py-2.5 text-base font-medium text-gray-900 shadow-sm outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-pink-500 focus:ring-0"
            >
              <option value="overview">Overview</option>
              <option value="analytics" selected>
                Analytics
              </option>
              <option value="profile">Profile</option>
              <option value="notifications">Notifications</option>
              <option value="plan">Plan</option>
              <option value="settings">Settings</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <div
                role="tablist"
                aria-label="Tabs"
                className="-mb-px flex items-end gap-x-8"
              >
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="overview-tab"
                  id="overview"
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Overview
                </button>
                <button
                  role="tab"
                  aria-selected="true"
                  aria-controls="analytics-tab"
                  id="analytics"
                  className="inline-flex border-b-2 border-pink-500 px-1 py-3.5 text-sm font-semibold text-pink-500"
                >
                  Analytics
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="profile-tab"
                  id="profile"
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Profile
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="notifications-tab"
                  id="notifications"
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Notifications
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="plan-tab"
                  id="plan"
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Plan
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="settings-tab"
                  id="settings"
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Settings
                </button>
              </div>
            </div>
          </div>
          Tab panels
          <div className="mt-4">
            <div
              id="overview-tab"
              role="tabpanel"
              aria-labelledby="overview"
              className="hidden"
            >
              Overview content
            </div>
            <div
              id="analytics-tab"
              role="tabpanel"
              aria-labelledby="analytics"
              className="block"
            >
              Analytics content
            </div>
            <div
              id="profile-tab"
              role="tabpanel"
              aria-labelledby="profile"
              className="hidden"
            >
              Profile content
            </div>
            <div
              id="notifications-tab"
              role="tabpanel"
              aria-labelledby="notifications"
              className="hidden"
            >
              Notifications content
            </div>
            <div
              id="plan-tab"
              role="tabpanel"
              aria-labelledby="plan"
              className="hidden"
            >
              Plan content
            </div>
            <div
              id="settings-tab"
              role="tabpanel"
              aria-labelledby="settings"
              className="hidden"
            >
              Settings content
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomeTab;
