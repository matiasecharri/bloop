import s from "./Note.module.css";

interface NoteProps {
  text: string;
}

const Note = ({ text }: NoteProps) => <p className={s.note}>{text}</p>;

export default Note;
