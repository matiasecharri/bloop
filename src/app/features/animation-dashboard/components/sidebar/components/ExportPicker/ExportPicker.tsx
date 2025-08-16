import { useControls } from "@/app/features/animation-dashboard/context";
import { IconConfig } from "@/assets/svg";

import { Button, Note, Subtitle, Title } from "@/shared/components/atoms";

import { ButtonWrapper, PickerStep } from "@/shared/components/molecules";

import { PickerWrapper } from "@/shared/components/organisms";

import {
  handleExportAnimationCode,
  handleExportAnimationMP4,
} from "./exportFns";

const ExportPicker = () => {
  const { state } = useControls();
  const { selectedAnimation } = state.animations;

  console.log(state.animations);

  return (
    <PickerWrapper>
      <Title text="Export Config">
        <IconConfig />
      </Title>
      <PickerStep>
        <Subtitle step="09" text="export your animation" />
        <ButtonWrapper
          isColumm
          subtitle="JS File, MP4, GIF"
          title="Format Options:"
        >
          <Button
            withHover
            text="Export to Code"
            onClick={() => handleExportAnimationCode(selectedAnimation, state)}
          />
          <Button
            disabled
            withHover
            text="Download MP4"
            onClick={() =>
              handleExportAnimationMP4(".Visualizer_visualizer__LKutw")
            }
          />
          <Button disabled withHover text="Download GIF" />
        </ButtonWrapper>
        <Note text="*Some features will be ready in a future release." />
      </PickerStep>
    </PickerWrapper>
  );
};

export default ExportPicker;
