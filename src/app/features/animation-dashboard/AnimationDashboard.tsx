import { Sidebar } from "./sidebar";
import { Visualizer } from "./visualizer";
import s from "./AnimationDashboard.module.css";

const AnimationDasboard = () => {
  return (
    <main className={s.dashboard}>
      <Sidebar />
      <Visualizer />
    </main>
  );
};

export default AnimationDasboard;
