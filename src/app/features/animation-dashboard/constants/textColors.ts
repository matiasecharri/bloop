export const textColors = [
  "#181818",
  "#2C2C2C",
  "#3D3D4D",
  "#4A3F55",
  "#4B5C7D",
  "#5A4B6B",
  "#3F4E5C",
  "#4E586A",
  "#6B557A",
  "#5C3F72",
  "#FFFCE1",
  "#FFF3E0",
  "#E0F7FA",
  "#FDE2FF",
  "#E2FFE2",
  "#FFF0F5",
  "#FAFAD2",
  "#F0FFFF",
  "#F5F5DC",
  "#F0EAD6",
] as const;

export type TextColorType = (typeof textColors)[number];
