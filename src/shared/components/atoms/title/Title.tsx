import s from "./Title.module.css";

interface TitleProps {
  text: string;
  children?: React.ReactNode;
}

const Title = ({ text, children }: TitleProps) => {
  return (
    <h2 className={s.title}>
      {children}
      {text}
    </h2>
  );
};

export default Title;
