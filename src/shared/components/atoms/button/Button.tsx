import { MouseEvent } from "react";
import clsx from "clsx";
import s from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  disabled?: boolean;
  withHover?: boolean;
  customFont?: string;
}

const Button = ({
  text,
  isActive,
  disabled,
  customFont,
  withHover,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        s.button,
        isActive && s.active,
        disabled && s.disabled,
        withHover && s.hover
      )}
      disabled={disabled}
      style={{ fontFamily: customFont }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
