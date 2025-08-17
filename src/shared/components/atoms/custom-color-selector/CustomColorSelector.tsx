"use client";

import { useState, useEffect } from "react";

import s from "./CustomColorSelector.module.css";

interface CustomColorSelectorProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  debounceMs?: number;
}

const CustomColorSelector = ({
  title,
  value,
  onChange,
  debounceMs = 200,
}: CustomColorSelectorProps) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(localValue);
    }, debounceMs);

    return () => clearTimeout(handler);
  }, [localValue, onChange, debounceMs]);

  return (
    <section>
      <h3 className={s.title}>{title}</h3>
      <div className={s.wrapper}>
        <div className={s.container}>
          <input
            className={s.inputColor}
            type="color"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomColorSelector;
