import { ReactNode } from "react";
import s from "./ButtonWrapper.module.css";

interface ButtonWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const ButtonWrapper = ({
  children,
  title,
  subtitle,
}: ButtonWrapperProps) => {

  return (
    <section>
      <p className={s.title}>
        <strong>{title}</strong> {subtitle}
      </p>
      <div className={s.wrapper}>
        {children}
      </div>
    </section>
  );
};

export default ButtonWrapper;
