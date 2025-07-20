import { createContext, ReactNode, useContext } from "react";
import { ControlsSettings, DefaultControlsSettings } from "./controlsTypes";

interface ControlsProviderProps {
  children: ReactNode;
}

interface ControlsContextType {
  settings: ControlsSettings;
  setSettings: () => void;
}

const ControlsContext = createContext<ControlsContextType | undefined>(
  undefined
);

export const useControls = () => {
  const context = useContext(ControlsContext);

  if (context === undefined)
    throw new Error(
      "useControls hook must be initialized inside of a <Controls/> Provider"
    );

  return context;
};

export const ControlsProvider = ({ children }: ControlsProviderProps) => {
  return (
    <ControlsContext.Provider
      value={{
        settings: DefaultControlsSettings,
        setSettings: () => console.log("Controls Settings"),
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
};
