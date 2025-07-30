"use client";

import { ControlsProvider } from "./context";

import { Sidebar, Visualizer } from "./components";

import s from "./AnimationDashboard.module.css";

const AnimationDashboard = () => {
  return (
    <ControlsProvider>
      <main className={s.dashboard}>
        <Sidebar />
        <Visualizer />
      </main>
    </ControlsProvider>
  );
};

export default AnimationDashboard;
