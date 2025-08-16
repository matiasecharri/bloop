import { MouseEvent } from "react";

import clsx from "clsx";

import s from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  withHover?: boolean;
  customFont?: string;
}

const Button = ({ text, isActive, customFont, withHover, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(s.button, !!isActive && s.active, !!withHover && s.hover)}
      style={{ fontFamily: clsx(!!customFont && customFont) }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
