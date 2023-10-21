import { IState } from "src/globalTypes";

export const filterMenuSelectors = {
  getFilterMenuIsOpened: (state: IState) => state.filterMenu.filterMenuIsOpened,
};
