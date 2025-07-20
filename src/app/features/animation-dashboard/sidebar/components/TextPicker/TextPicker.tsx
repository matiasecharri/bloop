import { useState } from "react";
import { useControls } from "../../../context";
import s from "./TextPicker.module.css";

const TextPicker = () => {
  const { settings } = useControls();
  const { userText } = settings.text;
  const [newText, setNewText] = useState<string>(userText);

  return (
    <article>
      <input
        type="text"
        value={newText}
        placeholder="Add your text here"
        onChange={(e) => setNewText(() => e.target.value)}
      />
    </article>
  );
};

export default TextPicker;
