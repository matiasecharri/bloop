import { ChangeEvent, MouseEvent, ReactNode, useId } from "react";

import { MiniButton } from "../../atoms";

import s from "./InputRange.module.css";

interface InputRangeProps {
  label: string;
  max: number;
  min: number;
  value: number;
  step?: number;
  unit?: string;
  isBtnDisabled?: boolean;
  children?: ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const InputRange = ({
  label,
  max,
  min,
  value,
  step,
  unit,
  isBtnDisabled,
  children,
  onChange,
  onClick,
}: InputRangeProps) => {
  const id = useId();

  return (
    <div className={s.inputWrapper}>
      <div className={s.floating}>
        <MiniButton
          ariaLabel={`reset ${value}`}
          disabled={isBtnDisabled}
          onClick={onClick}
        />
        {children}
      </div>
      <label className={s.labelStyle} htmlFor={id}>
        <strong>{label}:</strong> {value} {unit}
      </label>
      <input
        className={s.inputRange}
        id={id}
        max={max}
        min={min}
        step={step ?? 1}
        style={
          {
            ["--progress"]: `${((value - min) / (max - min)) * 100}%`,
          } as React.CSSProperties
        }
        type="range"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputRange;
