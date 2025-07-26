import { MouseEvent, ReactNode } from "react";

import clsx from "clsx";

import { IconReset } from "@/assets/svg";

import s from "./MiniButton.module.css";

interface ResetButtonProps {
  ariaLabel: string;
  disabled?: boolean;
  children?: ReactNode;
  noAnimation?: boolean;
  isActive?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ResetButton = ({
  ariaLabel,
  disabled,
  noAnimation,
  isActive,
  children,
  onClick,
}: ResetButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={clsx(
        s.miniBtn,
        !!disabled && s.disabledBtn,
        !!isActive && s.active,
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
