import { ChangeEvent } from "react";
import s from "./InputText.module.css";

interface InputTextProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  maxLength?: number;
}

const InputText = ({
  value,
  onChange,
  placeholder,
  maxLength,
}: InputTextProps) => {
  return (
    <input
      className={s.input}
      maxLength={maxLength}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputText;
