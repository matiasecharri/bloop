import { ReactNode } from "react";

import s from "./RangeWrapper.module.css";

interface RangeWrapperProps {
  children: ReactNode;
}

const RangeWrapper = ({ children }: RangeWrapperProps) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default RangeWrapper; 