import { ChangeEvent } from "react";
import s from "./InputRange.module.css";

interface InputRangeProps {
  label: string;
  max: number;
  min: number;
  value: number;
  step?: number;
  unit?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputRange = ({
  label,
  max,
  min,
  value,
  step,
  unit,
  onChange,
}: InputRangeProps) => {
  return (
    <div className={s.inputWrapper}>
      <p>
        <strong>{label}:</strong> {value} {unit}
      </p>
      <input
        aria-labelledby={label}
        className={s.inputRange}
        id={label}
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
