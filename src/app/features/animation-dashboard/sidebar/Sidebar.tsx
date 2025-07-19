"use client";
import { ReactNode, useState } from "react";
import clsx from "clsx";
import {
  AnimationPicker,
  BackgroundPicker,
  ColorPicker,
  TextPicker,
} from "./components";
import { IconAnimation, IconBackground, IconPalette, IconText } from "@/assets/svg";
import s from "./Sidebar.module.css";

interface TabType {
  tabName: string;
  component: ReactNode;
  icon: ReactNode;
}

const tabs: TabType[] = [
  { tabName: "text", component: <TextPicker />, icon: <IconText /> },
  {
    tabName: "animation",
    component: <AnimationPicker />, icon: <IconAnimation />,
  },
  { tabName: "color", component: <ColorPicker />, icon: <IconPalette /> },
  {
    tabName: "background",
    component: <BackgroundPicker />, icon: <IconBackground />,
  },
] as const;

type TabName = (typeof tabs)[number]["tabName"];

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState<TabName>(tabs[0].tabName);

  const currentTab = tabs.find((tab) => tab.tabName === selectedTab);

  return (
    <aside className={s.sidebar}>
      <section className={s.buttonBar}>
        {tabs.map(({ tabName, icon }) => (
          <button
            key={tabName}
            aria-label={tabName}
            className={clsx(s.btn, tabName === selectedTab ? s.btnActive : "")}
            onClick={() => setSelectedTab(() => tabName)}
            type="button"
          >
            {icon}
            {tabName}
          </button>
        ))}
      </section>
      <section className={s.currentOptions}>{currentTab?.component}</section>
    </aside>
  );
};

export default Sidebar;
