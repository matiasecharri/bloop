import { ChangeEvent, MouseEvent } from "react";
import s from "./InputRange.module.css";
import { MiniButton } from "../../atoms";

interface InputRangeProps {
  label: string;
  max: number;
  min: number;
  value: number;
  step?: number;
  unit?: string;
  isBtnDisabled?: boolean;
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
  onChange,
  onClick,
}: InputRangeProps) => {
  return (
    <div className={s.inputWrapper}>
      <div className={s.floating}>
        <MiniButton
          ariaLabel={`reset ${value}`}
          disabled={isBtnDisabled}
          onClick={onClick}
        />
      </div>
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
