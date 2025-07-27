import { ReactNode } from "react";

import s from "./Tooltip.module.css";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <div className={s.tooltip}>
      <article className={s.info}>
        <p>{text}</p>
      </article>
      {children}
    </div>
  );
};

export default Tooltip;
