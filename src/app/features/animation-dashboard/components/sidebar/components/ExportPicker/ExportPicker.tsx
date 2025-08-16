import { useControls } from "@/app/features/animation-dashboard/context";
import { IconConfig } from "@/assets/svg";

import { Button, Subtitle, Title } from "@/shared/components/atoms";

import { ButtonWrapper, PickerStep } from "@/shared/components/molecules";

import { PickerWrapper } from "@/shared/components/organisms";

import handleExportAnimationCode from "./exportFns/handleExportAnimationCode";

const ExportPicker = () => {
  const { state } = useControls();  
  const { selectedAnimation } = state.animations;

  return (
    <PickerWrapper>
      <Title text="Export Config">
        <IconConfig />
      </Title>
      <PickerStep>
        <Subtitle step="09" text="export your animation" />
        <ButtonWrapper
          isColumm
          subtitle="JSON, MP4, GIF"
          title="Format Options:"
        >
          <Button
            withHover
            text="Export to Code"
            onClick={() => handleExportAnimationCode(selectedAnimation, state)}
          />
          <Button withHover text="Download MP4" />
          <Button withHover text="Download GIF" />
        </ButtonWrapper>
      </PickerStep>
    </PickerWrapper>
  );
};

export default ExportPicker;
