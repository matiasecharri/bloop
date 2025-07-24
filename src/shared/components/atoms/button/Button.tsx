import { MouseEvent } from "react";
import s from "./Button.module.css";
import clsx from "clsx";

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
