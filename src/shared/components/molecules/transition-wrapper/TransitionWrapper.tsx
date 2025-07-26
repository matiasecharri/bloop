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
      filter: "blur(1px)",
    });

    gsap.to($transitionElement, {
      opacity: 1,
      y: "0px",
      filter: "blur(0px)",
      duration: 0.4,
      ease: "power1",
    });
  }, [state]);

  return <div ref={transitionRef}>{children}</div>;
};

export default TransitionWrapper;
