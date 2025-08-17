import { MouseEvent } from "react";

import { TextColorType } from "@/app/features/animation-dashboard/constants/textColors";
import { BackgroundColorType } from "@/app/features/animation-dashboard/constants/backgroundColors";

import clsx from "clsx";

import s from "./ButtonColor.module.css";

interface ButtonColorProps {
  ariaLabel: string;
  isActive: boolean;
  color: TextColorType | BackgroundColorType;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonColor = ({
  ariaLabel,
  color,
  isActive,
  onClick,
}: ButtonColorProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={clsx(s.buttonColor, !!isActive && s.active)}
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></button>
  );
};

export default ButtonColor;
