import { sectionsEnum } from "src/types/globalTypes";

export const GetColor = (section: sectionsEnum, selected: sectionsEnum) => {
  return section === selected ? "#7B61FF" : "#80858B";
};
