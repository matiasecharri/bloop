"use client";
import { Sidebar } from "./sidebar";
import { Visualizer } from "./visualizer";
import { ControlsProvider } from "./context";
import { useReducer } from "react";
import s from "./AnimationDashboard.module.css";

type counterActionsType = "PLUS" | "MINUS" | "RESET";

const counterReducer = (state: number, action: counterActionsType) => {
  switch (action) {
    case "PLUS":
      return (state + 1);

    case "MINUS":
      return state === 0 ? state : state - 1;

    case "RESET":
      return (state = 0);

    default:
      return state;
  }
};

const AnimationDasboard = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <ControlsProvider>
      <button onClick={() => dispatch("PLUS")}>ADD</button>
      <button onClick={() => dispatch("MINUS")}>MINUS</button>
      <button onClick={() => dispatch("RESET")}>RESET</button>
      <div>{state}</div>
      <main className={s.dashboard}>
        <Sidebar />
        <Visualizer />
      </main>
    </ControlsProvider>
  );
};

export default AnimationDasboard;
