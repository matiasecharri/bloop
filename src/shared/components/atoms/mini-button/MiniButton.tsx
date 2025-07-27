import { MouseEvent, ReactNode } from "react";

import clsx from "clsx";

import { IconReset } from "@/assets/svg";

import s from "./MiniButton.module.css";

type SizeType = "s" | "m" | "l";

interface ResetButtonProps {
  ariaLabel: string;
  disabled?: boolean;
  children?: ReactNode;
  noAnimation?: boolean;
  isActive?: boolean;
  size?: SizeType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ResetButton = ({
  ariaLabel,
  disabled,
  noAnimation,
  isActive,
  children,
  size,
  onClick,
}: ResetButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={clsx(
        s.miniBtn,
        !!disabled && s.disabledBtn,
        !!isActive && s.active,
        !!noAnimation && s.noAnimation,
        !onClick && s.noClickable,
        size === "s" ? s.small : s.long,
        size === "m" ? s.medium : s.long
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children || <IconReset />}
    </button>
  );
};

export default ResetButton;
