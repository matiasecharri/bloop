import { Sidebar } from "./sidebar";
import s from "./AnimationDashboard.module.css";

const AnimationDasboard = () => {
  return (
    <main className={s.container}>
      <Sidebar />
      <div className={s.placeholder}></div>
    </main>
  );
};

export default AnimationDasboard;
