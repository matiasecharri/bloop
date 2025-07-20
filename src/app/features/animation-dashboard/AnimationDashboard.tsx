"use client";
import { Sidebar } from "./sidebar";
import { Visualizer } from "./visualizer";
import { ControlsProvider } from "./context";
import s from "./AnimationDashboard.module.css";

const AnimationDasboard = () => {
  return (
    <ControlsProvider>
      <main className={s.dashboard}>
        <Sidebar />
        <Visualizer />
      </main>
    </ControlsProvider>
  );
};

export default AnimationDasboard;
