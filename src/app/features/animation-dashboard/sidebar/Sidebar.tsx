"use client";

import { ReactNode, useState } from "react";

import clsx from "clsx";

import {
  IconAnimation,
  IconBackground,
  IconDownload,
  IconPalette,
  IconPresets,
  IconText,
} from "@/assets/svg";

import { capitalize } from "@/shared/utilities";
import { TransitionWrapper } from "@/shared/components/molecules";

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
  icon: ReactNode;
}

const tabs: TabType[] = [
  { tabName: "text", component: <TextPicker />, icon: <IconText /> },
  {
    tabName: "animations",
    component: <AnimationPicker />,
    icon: <IconAnimation />,
  },
  { tabName: "color", component: <ColorPicker />, icon: <IconPalette /> },
  {
    tabName: "background",
    component: <BackgroundPicker />,
    icon: <IconBackground />,
  },
  {
    tabName: "presets",
    component: <BackgroundPicker />,
    icon: <IconPresets />,
  },
  {
    tabName: "download",
    component: <BackgroundPicker />,
    icon: <IconDownload />,
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
            aria-label={`${tabName} settings`}
            className={clsx(s.btn, tabName === selectedTab ? s.btnActive : "")}
            type="button"
            onClick={() => setSelectedTab(tabName)}
          >
            <span>
              {icon}
              {capitalize(tabName)}
            </span>
          </button>
        ))}
      </section>
      <section className={s.currentPicker}>
        <TransitionWrapper state={selectedTab}>
          {currentTab?.component}
        </TransitionWrapper>
      </section>
    </aside>
  );
};

export default Sidebar;
