import { IFilters, sortByEnum } from "src/types/globalTypes";
import { filtersACtionsEnum } from "src/store/actions/filtersActions";

const defaultState = {
  sortBy: sortByEnum.RATING,

  yearFrom: 0,
  yearTo: 0,

  ratingFrom: 0,
  ratingTo: 0,
};

interface IFiltersAction {
  type: filtersACtionsEnum;
  payload: IFilters;
}

export const filtersReducer = (
  state = defaultState,
  action: IFiltersAction
) => {
  switch (action.type) {
    case filtersACtionsEnum.CHANGE_FILTERS: {
      return { ...state, ...action.payload };
    }
    case filtersACtionsEnum.CLEAR_FILTERS: {
      return defaultState;
    }
    default:
      return state;
  }
};
