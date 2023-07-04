"use client";
import Header from "@/components/Header/Header";
import Featured from "@/components/Featured/Featured";
import Sidebar from "@/components/Sidebar/Sidebar";
import DiscussionForum from "@/components/DiscussionForum/DiscussionForum";
import MarketStories from "@/components/MarketStories/MarketStories";
import "./page.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BottomMenu from "@/components/BottomMenu/BottomMenu";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <Featured />
      <div className="desktop-container w-full mt-1">
        <div className="grid-desktop">
          <div className="desktop-menu sm:h-screen ">
            <Sidebar />
          </div>
          <div className="px-8 w-full desktop-grid-container">
            <div className="custom-scroll h-screen overflow-y-auto px-2">
              <p className="text-red-500 text-left font-semibold text-base">
                DISCUSSION FORUM
              </p>
              <DiscussionForum />
            </div>
            <div className="custom-scroll h-screen overflow-y-auto px-2">
              <p className="text-red-500 text-left font-semibold text-base">
                MARKET STORIES
              </p>
              <MarketStories />
            </div>
          </div>
          <div className="mobile-container w-full">
            <Tabs>
              <TabList className="grid grid-cols-2  bg-blue-950  ">
                <Tab
                  className="py-2 text-center font-semibold  text-white"
                  selectedClassName="bg-black opacity-80"
                >
                  Discussion Forum
                </Tab>
                <Tab
                  className="py-2 text-center font-semibold text-white "
                  selectedClassName="bg-black opacity-80"
                >
                  Market Stories
                </Tab>
              </TabList>
              <TabPanel className="p-2">
                <div className="h-screen overflow-y-auto pb-10">
                  <DiscussionForum />
                </div>
              </TabPanel>
              <TabPanel className="p-2">
                <div className="h-screen overflow-y-auto">
                  <MarketStories />
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="add-icon absolute z-20 bottom-20 right-2 cursor-pointer">
        <div className="p-3 text-white bg-blue-950 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
      <div className="bottom-menu">
        <BottomMenu />
      </div>
    </div>
  );
}
