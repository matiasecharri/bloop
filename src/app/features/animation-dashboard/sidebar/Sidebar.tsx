import {
  AnimationPicker,
  BackgroundPicker,
  ColorPicker,
  TextPicker,
} from "./components";
import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <section className={s.buttonBar}>
        <button>TX</button>
        <button>FX</button>
        <button>CO</button>
        <button>BG</button>
        <button>EX</button>
      </section>
      <section className={s.currentOptions}>
        <TextPicker />
        <AnimationPicker />
        <ColorPicker />
        <BackgroundPicker />
      </section>
    </aside>
  );
};

export default Sidebar;
