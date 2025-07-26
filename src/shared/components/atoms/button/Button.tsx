import { MouseEvent } from "react";

import clsx from "clsx";

import s from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
}

const Button = ({ text, isActive, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(s.button, !!isActive && s.active)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
