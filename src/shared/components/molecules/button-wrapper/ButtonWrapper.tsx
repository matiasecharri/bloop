import { ReactNode } from "react";

import s from "./ButtonWrapper.module.css";
import clsx from "clsx";

interface ButtonWrapperProps {
  title: string;
  subtitle?: string;
  isColumm?: boolean;
  children: ReactNode;
}

const ButtonWrapper = ({
  children,
  title,
  subtitle,
  isColumm,
}: ButtonWrapperProps) => {
  return (
    <section>
      <p className={s.title}>
        <strong>{title}</strong> {subtitle}
      </p>
      <div className={clsx(s.wrapper, !!isColumm && s.column)}>{children}</div>
    </section>
  );
};

export default ButtonWrapper;
