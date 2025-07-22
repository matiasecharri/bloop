import s from "./Subtitle.module.css";

interface SubtitleProps {
  text: string;
  step?: string;
}

const Subtitle = ({ text, step }: SubtitleProps) => {
  return (
    <h3 className={s.subtitle}>
      <strong>{step}.</strong>{" "}
      {text}
    </h3>
  );
};

export default Subtitle;
