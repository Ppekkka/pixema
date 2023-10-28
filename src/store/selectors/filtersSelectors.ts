import { IState } from "src/globalTypes";

export const filtersSelectors = {
  getFilters: (state: IState) => state.filters,
};
