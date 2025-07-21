"use client";
import { ReactNode, createContext, useContext, useReducer } from "react";

// REDUCER TYPES
export const COUNTER_ACTIONS = {
  PLUS: "PLUS",
  MINUS: "MINUS",
  RESET: "RESET",
} as const;

export type CounterAction =
  | { type: typeof COUNTER_ACTIONS.PLUS }
  | { type: typeof COUNTER_ACTIONS.MINUS }
  | { type: typeof COUNTER_ACTIONS.RESET };

// REDUCER
const counterReducer = (state: number, action: CounterAction): number => {
  switch (action.type) {
    case COUNTER_ACTIONS.PLUS:
      return state + 1;

    case COUNTER_ACTIONS.MINUS:
      return state === 0 ? state : state - 1;

    case COUNTER_ACTIONS.RESET:
      return 0;

    default:
      return state;
  }
};

// CONTEXT TYPES
interface CounterProviderProps {
  children: ReactNode;
}

interface CounterContextValue {
  state: number;
  dispatch: React.Dispatch<CounterAction>;
}

// CONTEXT
const CounterContext = createContext<CounterContextValue | undefined>(
  undefined
);

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (context === undefined)
    throw new Error("useCounter must be used within a CounterProvider");

  return context;
};

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
