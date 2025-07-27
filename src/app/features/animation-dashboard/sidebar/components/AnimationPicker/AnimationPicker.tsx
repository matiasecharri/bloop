import { easings } from "../../../constants";
import { defaultControlsSettings } from "../../../models";
import { CONTROLS_ACTIONS, useControls } from "../../../context";

import { IconConfig, IconLoop } from "@/assets/svg";
import { Button, MiniButton, Subtitle, Title } from "@/shared/components/atoms";
import {
  ButtonWrapper,
  InputRange,
  PickerStep,
  PickerWrapper,
  RangeWrapper,
  ScrollerWrapper,
} from "@/shared/components/molecules";

const AnimationPicker = () => {
  const { state, dispatch } = useControls();

  const { animations } = state;

  const isAnimationDefault = <K extends keyof typeof animations>(
    key: K
  ): boolean => animations[key] === defaultControlsSettings.animations[key];

  return (
    <PickerWrapper>
      <Title text="Animation Settings">
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
      <PickerStep>
        <Subtitle step="05" text="animation properties" />
        <RangeWrapper>
          <InputRange
            isBtnDisabled={isAnimationDefault("duration")}
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
            isBtnDisabled={isAnimationDefault("stagger")}
            label="Stagger"
            max={0.5}
            min={0}
            step={0.01}
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
            isBtnDisabled={isAnimationDefault("initialDelay")}
            label="Initial Delay"
            max={10}
            min={0}
            step={0.1}
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
            isBtnDisabled={isAnimationDefault("repeatDelay")}
            label="Repeat Delay"
            max={10}
            min={0}
            step={0.1}
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
            isBtnDisabled={isAnimationDefault("repeat")}
            label="Repeat"
            max={10}
            min={-1}
            step={1}
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
                    repeat:
                      animations.repeat === -1
                        ? (animations.repeat = 1)
                        : (animations.repeat = -1),
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
        </RangeWrapper>
      </PickerStep>
    </PickerWrapper>
  );
};

export default AnimationPicker;
