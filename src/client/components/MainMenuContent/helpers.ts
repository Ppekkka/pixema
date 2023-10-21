import { SectionsEnum } from "src/client/components/MainMenuContent/MainMenuContent";

export const GetColor = (section: SectionsEnum, selected: SectionsEnum) => {
  return section === selected ? "#7B61FF" : "#80858B";
};