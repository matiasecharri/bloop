import clsx from "clsx";
import s from "./PickerStep.module.css";

interface PickerStepProps {
  noMargin?: boolean;
  children: React.ReactNode;
}

const PickerStep = ({ noMargin, children }: PickerStepProps) => {
  return (
    <div className={clsx(s.step, !!noMargin && s.noMargin)}>{children}</div>
  );
};

export default PickerStep;
