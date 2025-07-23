import { PickerStep, PickerWrapper } from "@/shared/components/molecules";
import { CONTROLS_ACTIONS, useControls } from "../../../context";
import { InputRange, Subtitle, Title } from "@/shared/components/atoms";
import { IconConfig } from "@/assets/svg";

const AnimationPicker = () => {
  const { state, dispatch } = useControls();

  const { animations } = state;

  return (
    <PickerWrapper>
      <Title text="Animation Config">
        <IconConfig />
      </Title>
      <PickerStep>
        <Subtitle step="04"text="Choose the animation"/>
      </PickerStep>
      <PickerStep>
        <Subtitle step="05" text="Customize the properties" />
        <InputRange
          label="Duration"
          max={3}
          min={0.1}
          step={0.1}
          unit="secs"
          value={animations.duration}
          onChange={(e) =>
            dispatch({
              type: CONTROLS_ACTIONS.ANIMATIONS,
              payload: { duration: Number(e.target.value) },
            })
          }
        />
        <InputRange
          label="Delay"
          max={3}
          min={0.1}
          step={0.1}
          unit="secs"
          value={animations.delay}
          onChange={(e) =>
            dispatch({
              type: CONTROLS_ACTIONS.ANIMATIONS,
              payload: { delay: Number(e.target.value) },
            })
          }
        />
      </PickerStep>
    </PickerWrapper>
  );
};

export default AnimationPicker;
// <p>Duration: {animations.duration}</p>
// <p>Delay: {animations.delay}</p>
// <p>FadeIn: {animations.fadeIn ? "true" : "false"}</p>
// <p>FadeOut: {animations.fadeOut ? "true" : "false"}</p>
// <p>Loop: {animations.loop ? "true" : "false"}</p>
