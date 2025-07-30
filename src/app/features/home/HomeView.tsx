import { Header } from "@/shared/components/organisms";
import { AnimationDashboard } from "../animation-dashboard";

import s from "./HomeView.module.css";

const HomeView = () => {
  return (
    <>
      <div className={s.homeContainer}>
        <Header title="Bloop" />
        <AnimationDashboard />
      </div>
    </>
  );
};

export default HomeView;
