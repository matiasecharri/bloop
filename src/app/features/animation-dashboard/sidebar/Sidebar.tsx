"use client";
import { ReactNode, useEffect, useState } from "react";
import {
  AnimationPicker,
  BackgroundPicker,
  ColorPicker,
  TextPicker,
} from "./components";
import s from "./Sidebar.module.css";

interface TabType {
  tabName: string;
  component: ReactNode;
}

const tabs: TabType[] = [
  { tabName: "text", component: <TextPicker /> },
  { tabName: "animation", component: <AnimationPicker /> },
  { tabName: "color", component: <ColorPicker /> },
  { tabName: "background", component: <BackgroundPicker /> },
];

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState<any>();

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
    <aside className={s.sidebar}>
      <section className={s.buttonBar}>
        {tabs.map((tab) => (
          <button
            key={tab.tabName}
            onClick={(e) => setSelectedTab(() => tab.tabName)}
          >
            {tab.tabName}
          </button>
        ))}
      </section>
      <section className={s.currentOptions}>
        {/* <AnimationPicker />
        <ColorPicker />
        <BackgroundPicker /> */}
      </section>
    </aside>
  );
};

export default Sidebar;
