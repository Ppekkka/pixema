import { sectionsEnum } from "src/globalTypes";

export const GetColor = (section: sectionsEnum, selected: sectionsEnum) => {
  return section === selected ? "#7B61FF" : "#80858B";
};

export const getFilmsPerList = (width: number) => {
  if (
    width >= 1440 ||
    (width < 1280 && width >= 1024) ||
    (width < 768 && width >= 480)
  )
    return 8;
  else if (width < 1440 && width >= 1280) return 6;
  else if (width < 1024 && width >= 768) return 9;
  else return 9;
};
