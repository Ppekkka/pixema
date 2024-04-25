import { filterMenuActionsEnum } from "src/store/actions/filterMenuActions";

const defaultState = {
  filterMenuIsOpened: false,
};

interface IFilterMenuAction {
  type: filterMenuActionsEnum;
  payload: boolean;
}

export const filterMenuReducer = (state = defaultState, action: IFilterMenuAction) => {
  switch (action.type) {
    case filterMenuActionsEnum.OPEN_MENU: {
      return { ...state, filterMenuIsOpened: true };
    }

    case filterMenuActionsEnum.CLOSE_MENU: {
      return { ...state, filterMenuIsOpened: false };
    }

    default:
      return state;
  }
};
