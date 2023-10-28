import { sectionsEnum } from "src/globalTypes";

export const GetColor = (section: sectionsEnum, selected: sectionsEnum) => {
  return section === selected ? "#7B61FF" : "#80858B";
};
