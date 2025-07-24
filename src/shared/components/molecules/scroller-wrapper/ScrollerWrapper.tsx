import { ReactNode } from "react";
import s from "./Scroller.module.css";

interface ScrollerWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const ScrollerWrapper = ({ children, title, subtitle }: ScrollerWrapperProps) => {
  return (
    <section>
      <p className={s.title}>
        <strong>{title}</strong>{" "}{subtitle}
      </p>
      <div className={s.scroller}>{children}</div>
    </section>
  );
};

export default ScrollerWrapper;
