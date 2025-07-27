import s from "./PickerStep.module.css";

interface PickerStepProps {
  children: React.ReactNode;
}

const PickerStep = ({ children }: PickerStepProps) => {
  return <div className={s.step}>{children}</div>;
};

export default PickerStep;
