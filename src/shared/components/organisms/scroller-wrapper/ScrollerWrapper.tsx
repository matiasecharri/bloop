"use client";

import { MouseEvent, ReactNode, useState } from "react";

import clsx from "clsx";

import { MiniButton } from "../../atoms";
import { IconCompress, IconExpand } from "@/assets/svg";

import s from "./Scroller.module.css";

interface ScrollerWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  isBtnDisabled?: boolean;
  isDefaultExpanded?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ScrollerWrapper = ({
  children,
  title,
  subtitle,
  isBtnDisabled,
  isDefaultExpanded,
  onClick,
}: ScrollerWrapperProps) => {
  const [isExpanded, setIsExpanded] = useState(isDefaultExpanded || false);
  const toggleExpanded = () => setIsExpanded((prevState) => !prevState);

  const ariaLabelMessage = isExpanded
    ? `minimize ${title} area`
    : `expand ${title} area`;

  return (
    <section>
      <div className={s.title}>
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
            size="m"
            onClick={toggleExpanded}
          >
            {isExpanded ? <IconCompress /> : <IconExpand />}
          </MiniButton>
        </div>
        <span className={s.info}>
          <strong>{title}</strong> {subtitle}
        </span>
      </div>
      <div className={clsx(s.scroller, !!isExpanded && s.expanded)}>
        {children}
      </div>
    </section>
  );
};

export default ScrollerWrapper;
