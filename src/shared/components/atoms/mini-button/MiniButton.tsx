import { MouseEvent, ReactNode } from "react";
import clsx from "clsx";
import { IconReset } from "@/assets/svg";
import s from "./MiniButton.module.css";

interface ResetButtonProps {
  ariaLabel: string;
  disabled?: boolean;
  children?: ReactNode;
  noAnimation?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ResetButton = ({
  ariaLabel,
  disabled,
  noAnimation,
  children,
  onClick,
}: ResetButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={clsx(
        s.miniBtn,
        !!disabled && s.disabledBtn,
        !!noAnimation && s.noAnimation
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children || <IconReset />}
    </button>
  );
};

export default ResetButton;
