import s from "./PickerWrapper.module.css";

interface PickerWrapperProps {
  children: React.ReactNode;
}

const PickerWrapper = ({ children }: PickerWrapperProps) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default PickerWrapper;
