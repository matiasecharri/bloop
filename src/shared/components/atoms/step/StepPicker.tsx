import s from "./StepPicker.module.css"

interface StepPickerProps {
    children: React.ReactNode
}

const StepPicker = ({ children }: StepPickerProps) => {
  return <div className={s.step}>
    {children}
  </div>
};

export default StepPicker