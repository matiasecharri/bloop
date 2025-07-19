import { Sidebar } from "./sidebar";
import { Visualizer } from "./visualizer";
import s from "./AnimationDashboard.module.css";

const AnimationDasboard = () => {
  return (
    <main className={s.container}>
      <Sidebar />
      <Visualizer />
    </main>
  );
};

export default AnimationDasboard;
