import {
  AnimationPicker,
  BackgroundPicker,
  ColorPicker,
  TextPicker,
} from "./components";
import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <section className={s.sidebar}>
      <div className={s.buttonBar}>
        <button>TX</button>
        <button>FX</button>
        <button>CO</button>
        <button>BG</button>
        <button>EX</button>
      </div>
      <div className={s.currentOptions}>
        <TextPicker />
        <AnimationPicker />
        <ColorPicker />
        <BackgroundPicker />
      </div>
    </section>
  );
};

export default Sidebar;
