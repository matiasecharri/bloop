import { createContext, ReactNode, useContext, useReducer } from "react";
import {
  AnimationSettings,
  ControlsSettings,
  DefaultControlsSettings,
  TextSettings,
} from "./controlsTypes";

//REDUCER TYPES
export const CONTROLS_ACTIONS = {
  TEXT: "TEXT",
  ANIMATIONS: "ANIMATIONS",
};

export type ControlsAction =
  | { type: typeof CONTROLS_ACTIONS.TEXT; payload: TextSettings }
  | { type: typeof CONTROLS_ACTIONS.ANIMATIONS; payload: AnimationSettings };

//REDUCER
const controlReducer = (
  state: ControlsSettings,
  action: ControlsAction
): ControlsSettings => {
  switch (action.type) {
    case CONTROLS_ACTIONS.TEXT:
      return {
        ...state,
        text: {
          ...state.text,
          ...action.payload,
        },
      };

    case CONTROLS_ACTIONS.ANIMATIONS:
      return {
        ...state,
        animations: {
          ...state.animations,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

//CONTEXT TYPES
interface ControlsProviderProps {
  children: ReactNode;
}

interface ControlsContextValue {
  state: ControlsSettings;
  dispatch: React.Dispatch<ControlsAction>;
}

//CONTEXT
const ControlsContext = createContext<ControlsContextValue | undefined>(
  undefined
);

export const useControls = () => {
  const context = useContext(ControlsContext);

  if (context === undefined)
    throw new Error(
      "useControls must be called inside of a <ControlsProvider/>"
    );

  return context;
};

//PROVIDER + REDUCER
export const ControlsProvider = ({ children }: ControlsProviderProps) => {
  const [state, dispatch] = useReducer(controlReducer, DefaultControlsSettings);

  return (
    <ControlsContext.Provider value={{ state, dispatch }}>
      {children}
    </ControlsContext.Provider>
  );
};
