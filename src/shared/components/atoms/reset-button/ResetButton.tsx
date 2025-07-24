import { MouseEvent } from "react";
import clsx from "clsx";
import { IconReset } from "@/assets/svg";
import s from "./ResetButton.module.css";

interface ResetButtonProps {
  ariaLabel: string;
  disabled?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ResetButton = ({ ariaLabel, disabled, onClick }: ResetButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={clsx(s.resetBtn, disabled && s.disabledBtn)}
      disabled={disabled}
      onClick={onClick}
    >
      <IconReset />
    </button>
  );
};

export default ResetButton;
