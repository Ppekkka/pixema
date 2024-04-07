import { sectionsEnum } from "src/types/globalTypes";

export enum sectionsActionsEnum {
  CHANGE_SECTION = "CHANGE_SECTION",
}

export const sectionsActions = {
  changeSection: (payload: sectionsEnum) => {
    return { type: sectionsActionsEnum.CHANGE_SECTION, payload };
  },
};
