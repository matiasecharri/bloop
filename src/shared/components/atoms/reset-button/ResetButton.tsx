import { IconReset } from "@/assets/svg";
import { MouseEvent } from "react";
import s from "./ResetButton.module.css";

interface ResetButtonProps {
  ariaLabel: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ResetButton = ({ ariaLabel, onClick }: ResetButtonProps) => {
  return (
    <button aria-label={ariaLabel} className={s.resetBtn} onClick={onClick}>
      <IconReset />
    </button>
  );
};

export default ResetButton;
