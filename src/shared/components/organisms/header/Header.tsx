import { ReactNode } from "react";
import s from "./Header.module.css";

interface HeaderProps {
  title: string;
  children?: ReactNode;
}

const Header = ({ title, children }: HeaderProps) => {
  return (
    <header className={s.header}>
      <h1>{title}</h1>
      {children}
    </header>
  );
};

export default Header;
