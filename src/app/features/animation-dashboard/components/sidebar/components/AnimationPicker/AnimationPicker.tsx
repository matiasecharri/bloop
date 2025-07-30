import animationsMap from "@/app/features/animation-dashboard/animations";
import { easings } from "@/app/features/animation-dashboard/constants";
import {
  CONTROLS_ACTIONS,
  useControls,
} from "@/app/features/animation-dashboard/context";
import { defaultControlsSettings } from "@/app/features/animation-dashboard/models";
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
import AnimationPreview from "../../../animation-preview/AnimationPreview";

const { ANIMATIONS: ANIMATIONS_ACTION } = CONTROLS_ACTIONS;

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
          isDefaultExpanded
          isBtnDisabled={isAnimationDefault("selectedAnimation")}
          subtitle={animations.selectedAnimation}
          title="Selected:"
          onClick={() =>
            dispatch({
              type: ANIMATIONS_ACTION,
              payload: {
                selectedAnimation:
                  defaultControlsSettings.animations.selectedAnimation,
              },
            })
          }
        >
          {Object.entries(animationsMap).map(([key, animation]) => {
            return (
              <AnimationPreview
                key={key}
                animationFn={animation.fn}
                animationName={animation.label}
                isActive={key === animations.selectedAnimation}
                onClick={() =>
                  dispatch({
                    type: ANIMATIONS_ACTION,
                    payload: {
                      selectedAnimation: key,
                    },
                  })
                }
              />
            );
          })}
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
                type: ANIMATIONS_ACTION,
                payload: { duration: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: ANIMATIONS_ACTION,
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
                type: ANIMATIONS_ACTION,
                payload: { stagger: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: ANIMATIONS_ACTION,
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
                type: ANIMATIONS_ACTION,
                payload: { initialDelay: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: ANIMATIONS_ACTION,
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
                type: ANIMATIONS_ACTION,
                payload: { repeatDelay: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: ANIMATIONS_ACTION,
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
                type: ANIMATIONS_ACTION,
                payload: { repeat: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: ANIMATIONS_ACTION,
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
                  type: ANIMATIONS_ACTION,
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
                  type: ANIMATIONS_ACTION,
                  payload: { yoyo: false },
                });
              }}
            />
            <Button
              isActive={animations.yoyo}
              text="On"
              onClick={() => {
                dispatch({
                  type: ANIMATIONS_ACTION,
                  payload: { yoyo: true },
                });
              }}
            />
          </ButtonWrapper>
        </RangeWrapper>
      </PickerStep>
      <PickerStep>
        <Subtitle step="06" text="advanced settings" />
        <ScrollerWrapper
          isBtnDisabled={isAnimationDefault("easing")}
          subtitle={animations.easing}
          title="Easing:"
          onClick={() =>
            dispatch({
              type: ANIMATIONS_ACTION,
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
                  type: ANIMATIONS_ACTION,
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
