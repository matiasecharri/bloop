import { Header } from "@/shared/components/organisms";
import AnimationDasboard from "../animation-dashboard/AnimationDashboard";
import s from "./HomeView.module.css";

const HomeView = () => {
  return (
    <>
      <div className={s.container}>
        <Header title="Quick Animations" />
        <AnimationDasboard />
      </div>
    </>
  );
};

export default HomeView;
