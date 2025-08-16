import { IconConfig } from "@/assets/svg";

import { Subtitle, Title } from "@/shared/components/atoms";

import { PickerStep } from "@/shared/components/molecules";

import { PickerWrapper } from "@/shared/components/organisms";

const ColorPicker = () => {
  return (
    <PickerWrapper>
      <Title text="Color Config">
        <IconConfig />
      </Title>
      <PickerStep>
        <Subtitle step="07" text="select your color" />
      </PickerStep>
    </PickerWrapper>
  );
};

export default ColorPicker;
