import { createContext, ReactNode, useContext, useReducer } from "react";
import {
  AnimationSettings,
  BackgroundSettings,
  ControlsSettings,
  defaultControlsSettings,
  TextSettings,
  TextStylesSettings,
} from "../models";
import { withLogger } from "@/shared/utilities";

//REDUCER TYPES
export const CONTROLS_ACTIONS = {
  TEXT: "TEXT",
  ANIMATIONS: "ANIMATIONS",
  TEXT_STYLES: "TEXT_STYLES",
  BACKGROUND: "BACKGROUND",
} as const;

export type ControlsAction =
  | { type: typeof CONTROLS_ACTIONS.TEXT; payload: Partial<TextSettings> }
  | {
      type: typeof CONTROLS_ACTIONS.ANIMATIONS;
      payload: Partial<AnimationSettings>;
    }
  | {
      type: typeof CONTROLS_ACTIONS.TEXT_STYLES;
      payload: Partial<TextStylesSettings>;
    }
  | {
      type: typeof CONTROLS_ACTIONS.BACKGROUND;
      payload: Partial<BackgroundSettings>;
    };

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

    case CONTROLS_ACTIONS.TEXT_STYLES:
      return {
        ...state,
        textStyles: {
          ...state.textStyles,
          ...action.payload,
        },
      };

    case CONTROLS_ACTIONS.BACKGROUND:
      return {
        ...state,
        background: {
          ...state.background,
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
  const [state, dispatch] = useReducer(
    withLogger(controlReducer),
    defaultControlsSettings
  );

  return (
    <ControlsContext.Provider value={{ state, dispatch }}>
      {children}
    </ControlsContext.Provider>
  );
};
