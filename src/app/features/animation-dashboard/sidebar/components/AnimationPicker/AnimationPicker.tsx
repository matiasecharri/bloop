import { IconConfig, IconLoop } from "@/assets/svg";

import { Button, MiniButton, Subtitle, Title } from "@/shared/components/atoms";
import {
  ButtonWrapper,
  InputRange,
  PickerStep,
} from "@/shared/components/molecules";
import {
  PickerWrapper,
  RangeWrapper,
  ScrollerWrapper,
} from "@/shared/components/organisms";

import { easings } from "../../../constants";
import { defaultControlsSettings } from "../../../models";
import { CONTROLS_ACTIONS, useControls } from "../../../context";

const AnimationPicker = () => {
  const { state, dispatch } = useControls();

  const { animations } = state;

  const isAnimationDefault = <K extends keyof typeof animations>(
    key: K
  ): boolean => animations[key] === defaultControlsSettings.animations[key];

  return (
    <PickerWrapper>
      <Title text="Animation Config">
        <IconConfig />
      </Title>
      <PickerStep>
        <Subtitle step="04" text="pick your animation" />
        <ScrollerWrapper
          isBtnDisabled={isAnimationDefault("easing")}
          subtitle={animations.easing}
          title="Easing:"
          onClick={() =>
            dispatch({
              type: CONTROLS_ACTIONS.ANIMATIONS,
              payload: { easing: defaultControlsSettings.animations.easing },
            })
          }
        >
          <div></div>
        </ScrollerWrapper>
      </PickerStep>
      <PickerStep>
        <Subtitle step="05" text="animation settings" />
        <RangeWrapper>
          <InputRange
            withTooltip
            isBtnDisabled={isAnimationDefault("duration")}
            label="Duration"
            max={3}
            min={0.1}
            step={0.1}
            tooltipInfo="Total time each animation takes to complete. Affects how long elements animate individually."
            unit="secs"
            value={animations.duration}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: { duration: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: {
                  duration: defaultControlsSettings.animations.duration,
                },
              })
            }
          />
          <InputRange
            withTooltip
            isBtnDisabled={isAnimationDefault("stagger")}
            label="Stagger"
            max={0.5}
            min={0}
            step={0.01}
            tooltipInfo="Delay between each element animation start. Combine it with duration for sequencing effects."
            unit="secs"
            value={animations.stagger}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: { stagger: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: {
                  stagger: defaultControlsSettings.animations.stagger,
                },
              })
            }
          />
          <InputRange
            withTooltip
            isBtnDisabled={isAnimationDefault("initialDelay")}
            label="Initial Delay"
            max={10}
            min={0}
            step={0.1}
            tooltipInfo="Delay before the animation starts. Useful for timed entrance effects."
            unit="secs"
            value={animations.initialDelay}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: { initialDelay: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: {
                  initialDelay: defaultControlsSettings.animations.initialDelay,
                },
              })
            }
          />
          <InputRange
            withTooltip
            isBtnDisabled={isAnimationDefault("repeatDelay")}
            label="Repeat Delay"
            max={10}
            min={0}
            step={0.1}
            tooltipInfo="Time to wait before repeating the animation. Only applies when repeat is greater than 0."
            unit="secs"
            value={animations.repeatDelay}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: { repeatDelay: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: {
                  repeatDelay: defaultControlsSettings.animations.repeatDelay,
                },
              })
            }
          />
          <InputRange
            withTooltip
            isBtnDisabled={isAnimationDefault("repeat")}
            label="Repeat"
            max={10}
            min={-1}
            step={1}
            tooltipInfo="How many times the animation should repeat. -1 means infinite looping."
            unit={
              animations.repeat === -1
                ? "Loop"
                : animations.repeat === 1
                ? "Time"
                : "Times"
            }
            value={animations.repeat}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: { repeat: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: {
                  repeat: defaultControlsSettings.animations.repeat,
                },
              })
            }
          >
            <MiniButton
              noAnimation
              ariaLabel="loop animation"
              isActive={animations.repeat === -1}
              onClick={() =>
                dispatch({
                  type: CONTROLS_ACTIONS.ANIMATIONS,
                  payload: {
                    repeat: animations.repeat === -1 ? 1 : -1,
                  },
                })
              }
            >
              <IconLoop />
            </MiniButton>
          </InputRange>
          <ButtonWrapper
            subtitle={animations.yoyo ? "activated" : "deactivated"}
            title="Yoyo:"
          >
            <Button
              isActive={!animations.yoyo}
              text="Off"
              onClick={() => {
                dispatch({
                  type: CONTROLS_ACTIONS.ANIMATIONS,
                  payload: { yoyo: false },
                });
              }}
            />
            <Button
              isActive={animations.yoyo}
              text="On"
              onClick={() => {
                dispatch({
                  type: CONTROLS_ACTIONS.ANIMATIONS,
                  payload: { yoyo: true },
                });
              }}
            />
          </ButtonWrapper>
        </RangeWrapper>
      </PickerStep>
      <PickerStep noMargin>
        <Subtitle step="06" text="advanced settings" />
        <ScrollerWrapper
          isBtnDisabled={isAnimationDefault("easing")}
          subtitle={animations.easing}
          title="Easing:"
          onClick={() =>
            dispatch({
              type: CONTROLS_ACTIONS.ANIMATIONS,
              payload: {
                easing: defaultControlsSettings.animations.easing,
              },
            })
          }
        >
          {easings.map((gsapEasing) => (
            <Button
              key={gsapEasing}
              isActive={gsapEasing === animations.easing}
              text={gsapEasing}
              onClick={() =>
                dispatch({
                  type: CONTROLS_ACTIONS.ANIMATIONS,
                  payload: {
                    easing: gsapEasing,
                  },
                })
              }
            />
          ))}
        </ScrollerWrapper>
      </PickerStep>
    </PickerWrapper>
  );
};

export default AnimationPicker;
