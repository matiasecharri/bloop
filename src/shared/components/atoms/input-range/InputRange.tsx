import { ChangeEvent } from "react";
import s from "./InputRange.module.css";

interface InputRangeProps {
  label: string;
  value: number;
  unit?: string;
  min: number;
  max: number;
  step?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputRange = ({
  label,
  value,
  unit,
  min,
  max,
  step,
  onChange,
}: InputRangeProps) => {
  return (
    <div>
      <p>
        <strong>{label}:</strong> {value} {unit}
      </p>
      <input
        id={label}
        aria-labelledby={label}
        className={s.inputRange}
        style={
          {
            ["--progress"]: `${((value - min) / (max - min)) * 100}%`,
          } as React.CSSProperties
        }
        type="range"
        value={value}
        min={min}
        max={max}
        step={step ?? 1}
        onChange={onChange}
      />
    </div>
  );
};

export default InputRange;
