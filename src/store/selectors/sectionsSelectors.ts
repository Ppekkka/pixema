import { IState } from "src/globalTypes";

export const sectionsSelectors = {
  getSection: (state: IState) => state.sections.section,
};
