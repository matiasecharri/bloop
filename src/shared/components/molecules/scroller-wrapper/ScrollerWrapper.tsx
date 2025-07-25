"use client";
import { MouseEvent, ReactNode, useState } from "react";
import s from "./Scroller.module.css";
import clsx from "clsx";
import { MiniButton } from "../../atoms";
import { IconCompress, IconExpand } from "@/assets/svg";

interface ScrollerWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  isBtnDisabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ScrollerWrapper = ({
  children,
  title,
  subtitle,
  isBtnDisabled,
  onClick,
}: ScrollerWrapperProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded((prevState) => !prevState);

  const ariaLabelMessage = isExpanded
    ? `minimize ${title} area`
    : `expand ${title} area`;

  return (
    <section>
      <p className={s.title}>
        <div className={s.floating}>
          {!!onClick && (
            <MiniButton
              ariaLabel={`reset ${title} to default`}
              disabled={isBtnDisabled}
              onClick={onClick}
            />
          )}
          <MiniButton
            noAnimation
            ariaLabel={ariaLabelMessage}
            onClick={toggleExpanded}
          >
            {isExpanded ? <IconCompress /> : <IconExpand />}
          </MiniButton>
        </div>
        <strong>{title}</strong> {subtitle}
      </p>
      <div className={clsx(s.scroller, !!isExpanded && s.expanded)}>
        {children}
      </div>
    </section>
  );
};

export default ScrollerWrapper;
