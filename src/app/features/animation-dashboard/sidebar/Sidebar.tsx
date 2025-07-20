"use client";
import { ReactNode, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import {
  AnimationPicker,
  BackgroundPicker,
  ColorPicker,
  TextPicker,
} from "./components";
import {
  IconAnimation,
  IconBackground,
  IconDownload,
  IconPalette,
  IconPresets,
  IconText,
} from "@/assets/svg";
import { capitalize } from "@/shared/utilities";
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
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });

  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const buttonBarRef = useRef<HTMLElement>(null);

  const indicatorPositionStyle = {
    top: `${indicatorStyle.top}px`,
    height: `${indicatorStyle.height}px`,
  };

  const currentTab = tabs.find((tab) => tab.tabName === selectedTab);

  const updateIndicatorPosition = (tabName: TabName) => {
    const button = buttonRefs.current[tabName];
    const buttonBar = buttonBarRef.current;

    if (button && buttonBar) {
      const top = button.offsetTop;
      const height = button.offsetHeight;

      setIndicatorStyle({ top, height });
    }
  };

  const handleTabClick = (tabName: TabName) => {
    setSelectedTab(tabName);
  };

  useEffect(() => {
    updateIndicatorPosition(selectedTab);
  }, [selectedTab]);

  return (
    <aside className={s.sidebar}>
      <div className={s.buttonBarContainer}>
        <section ref={buttonBarRef} className={s.buttonBar}>
          <div className={s.indicator} style={indicatorPositionStyle} />
          {tabs.map(({ tabName, icon }) => (
            <button
              key={tabName}
              ref={(el) => {
                buttonRefs.current[tabName] = el;
              }}
              aria-label={tabName}
              className={clsx(
                s.btn,
                tabName === selectedTab ? s.btnActive : ""
              )}
              onClick={() => handleTabClick(tabName)}
              type="button"
            >
              {icon}
              {capitalize(tabName)}
            </button>
          ))}
        </section>
      </div>
      <section className={s.currentPicker}>{currentTab?.component}</section>
    </aside>
  );
};

export default Sidebar;
