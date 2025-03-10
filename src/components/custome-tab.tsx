import React, { useState } from "react";

const CustomeTabs = () => {
  const [activeTab, setActiveTab] = useState("tabs-home");

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="w-full">
        <ul
          className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0 w-full"
          role="tablist"
        >
          <li role="presentation">
            <button
              onClick={() => handleTabClick("tabs-home")}
              className={`my-2 block border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:bg-neutral-100 focus:isolate 
            ${
              activeTab === "tabs-home"
                ? "border-primary text-primary"
                : "border-transparent text-neutral-500 dark:text-white/50 dark:hover:bg-neutral-700/60"
            }`}
              role="tab"
              aria-controls="tabs-home"
              aria-selected={activeTab === "tabs-home"}
            >
              Home
            </button>
          </li>
          <li role="presentation">
            <button
              onClick={() => handleTabClick("tabs-profile")}
              className={`my-2 block border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:bg-neutral-100 focus:isolate 
            ${
              activeTab === "tabs-profile"
                ? "border-primary text-primary"
                : "border-transparent text-neutral-500 dark:text-white/50 dark:hover:bg-neutral-700/60"
            }`}
              role="tab"
              aria-controls="tabs-profile"
              aria-selected={activeTab === "tabs-profile"}
            >
              Profile
            </button>
          </li>
          <li role="presentation">
            <button
              onClick={() => handleTabClick("tabs-messages")}
              className={`my-2 block border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:bg-neutral-100 focus:isolate 
            ${
              activeTab === "tabs-messages"
                ? "border-primary text-primary"
                : "border-transparent text-neutral-500 dark:text-white/50 dark:hover:bg-neutral-700/60"
            }`}
              role="tab"
              aria-controls="tabs-messages"
              aria-selected={activeTab === "tabs-messages"}
            >
              Messages
            </button>
          </li>
          <li role="presentation">
            <button
              disabled
              className="disabled:pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 dark:text-neutral-600"
              role="tab"
              aria-controls="tabs-contact"
              aria-selected={activeTab === "tabs-contact"}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Tabs Content */}
        <div className="mb-6">
          <div
            className={`transition-opacity duration-150 ease-linear ${
              activeTab === "tabs-home"
                ? "block opacity-100"
                : "hidden opacity-0"
            }`}
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
          >
            Tab 1 content
          </div>
          <div
            className={`transition-opacity duration-150 ease-linear ${
              activeTab === "tabs-profile"
                ? "block opacity-100"
                : "hidden opacity-0"
            }`}
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            Tab 2 content
          </div>
          <div
            className={`transition-opacity duration-150 ease-linear ${
              activeTab === "tabs-messages"
                ? "block opacity-100"
                : "hidden opacity-0"
            }`}
            id="tabs-messages"
            role="tabpanel"
            aria-labelledby="tabs-messages-tab"
          >
            Tab 3 content
          </div>
          <div
            className={`transition-opacity duration-150 ease-linear ${
              activeTab === "tabs-contact"
                ? "block opacity-100"
                : "hidden opacity-0"
            }`}
            id="tabs-contact"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab"
          >
            Tab 4 content
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomeTabs;
