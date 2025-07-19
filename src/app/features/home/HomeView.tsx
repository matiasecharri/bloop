import { Header } from "@/shared/components/organisms";
import s from "./HomeView.module.css";
import AnimationDasboard from "../animation-dashboard/AnimationDashboard";

const HomeView = () => {
  return (
    <>
      <div className={s.container}>
        <Header title="Animation Library" />
        <AnimationDasboard />
      </div>
    </>
  );
};

export default HomeView;
