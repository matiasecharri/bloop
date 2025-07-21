import { Header } from "@/shared/components/organisms";
import AnimationDasboard from "../animation-dashboard/AnimationDashboard";
import { CounterProvider } from "../animation-dashboard/context/Counter";
import s from "./HomeView.module.css";

const HomeView = () => {
  return (
    <>
      <CounterProvider>
        <div className={s.homeContainer}>
          <Header title="Quick Animations" />
          <AnimationDasboard />
        </div>
      </CounterProvider>
    </>
  );
};

export default HomeView;
