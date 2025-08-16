import { IconConfig } from "@/assets/svg";

import { Subtitle, Title } from "@/shared/components/atoms";

import { PickerStep } from "@/shared/components/molecules";

import { PickerWrapper } from "@/shared/components/organisms";

const BackgroundPicker = () => {
  return (
    <PickerWrapper>
      <Title text="Background Config">
        <IconConfig />
      </Title>
      <PickerStep>
        <Subtitle step="08" text="select your background" />
      </PickerStep>
    </PickerWrapper>
  );
};

export default BackgroundPicker;
