import { useControls } from "../../../context";

const AnimationPicker = () => {
  const { state } = useControls();

  const { animations } = state;

  return (
    <section>
      <p>Duration: {animations.duration}</p>
      <p>Delay: {animations.delay}</p>
      <p>FadeIn: {animations.fadeIn ? "true" : "false"}</p>
      <p>FadeOut: {animations.fadeOut ? "true" : "false"}</p>
      <p>Loop: {animations.loop ? "true" : "false"}</p>
    </section>
  );
};

export default AnimationPicker;
