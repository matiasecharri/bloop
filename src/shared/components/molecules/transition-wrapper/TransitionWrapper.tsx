"use client";
import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface TransitionWrapperProps {
  state: string;
  children: ReactNode;
}

const TransitionWrapper = ({ children, state }: TransitionWrapperProps) => {
  const transitionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const $transitionElement = transitionRef.current;

    gsap.set($transitionElement, {
      opacity: 0,
      y: "50px",
    });

    gsap.to($transitionElement, {
      opacity: 1,
      duration: 0.33,
      ease: "power1",
      y: "0px",
    });
  }, [state]);

  return <div ref={transitionRef}>{children}</div>;
};

export default TransitionWrapper;
