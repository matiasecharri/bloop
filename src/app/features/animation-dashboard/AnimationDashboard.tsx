"use client";
import { Sidebar } from "./sidebar";
import { Visualizer } from "./visualizer";
import { ControlsProvider } from "./context";
import { COUNTER_ACTIONS, useCounter } from "./context/Counter";
import s from "./AnimationDashboard.module.css";

const AnimationDasboard = () => {
  const { state, dispatch } = useCounter();
  return (
    <ControlsProvider>
      <button onClick={() => dispatch({ type: COUNTER_ACTIONS.PLUS })}>
        ADD
      </button>
      <button onClick={() => dispatch({ type: COUNTER_ACTIONS.MINUS })}>
        MINUS
      </button>
      <button onClick={() => dispatch({ type: COUNTER_ACTIONS.RESET })}>
        RESET
      </button>
      <div>{state}</div>
      <main className={s.dashboard}>
        <Sidebar />
        <Visualizer />
      </main>
    </ControlsProvider>
  );
};

export default AnimationDasboard;
