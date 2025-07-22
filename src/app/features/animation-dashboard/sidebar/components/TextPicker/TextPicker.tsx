import { CONTROLS_ACTIONS, useControls } from "../../../context";
import { capitalize } from "@/shared/utilities";
import { IconConfig } from "@/assets/svg";
import { Wrapper } from "@/shared/components/molecules";
import { StepPicker, Subtitle, Title } from "@/shared/components/atoms";
import s from "./TextPicker.module.css";

const TextPicker = () => {
  const { state, dispatch } = useControls();

  const { text } = state;

  return (
    <article>
      <Wrapper>
        <Title text={"Text Configuration"}>
          <IconConfig />
        </Title>

        <StepPicker>
          <Subtitle step={"01."} text={" Add your text here "} />
          <input
            type="text"
            value={text.userText}
            className={s.input}
            placeholder="Quick animations is funny!"
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.TEXT,
                payload: { userText: e.target.value },
              })
            }
          />
        </StepPicker>

        <StepPicker>
          <Subtitle step={"02."} text={"Font Family"} />
          <p className={s.fontFamily}>{capitalize(text.fontFamily)}</p>
        </StepPicker>

        <StepPicker>
          <Subtitle step={"03."} text={"Size and Weight"} />
          <div className={s.inputsWrapper}>
            <p>
              <strong>Size:</strong> {text.fontSize}px /{" "}
              {(text.fontSize / 16).toFixed(2)}rem
            </p>
            <input
              className={s.inputRange}
              type="range"
              min={12}
              max={200}
              value={text.fontSize}
              onChange={(e) =>
                dispatch({
                  type: CONTROLS_ACTIONS.TEXT,
                  payload: { fontSize: Number(e.target.value) },
                })
              }
            />
            <p>
              <strong>Weight:</strong> {text.fontWeight}
            </p>
            <input
              className={s.inputRange}
              type="range"
              min={100}
              max={900}
              step={100}
              value={text.fontWeight}
              onChange={(e) =>
                dispatch({
                  type: CONTROLS_ACTIONS.TEXT,
                  payload: { fontWeight: Number(e.target.value) },
                })
              }
            />
          </div>
        </StepPicker>
      </Wrapper>
    </article>
  );
};

export default TextPicker;
