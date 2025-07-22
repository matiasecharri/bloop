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
        className={s.inputRange}
        type="range"
        min={min}
        max={max}
        step={step || 0}
        value={value}
        style={{
          // @ts-ignore
          "--progress": `${((value - min) / (max - min)) * 100}%`,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default InputRange;
