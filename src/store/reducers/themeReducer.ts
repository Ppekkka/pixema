import { themeActionsEnum } from "src/store/actions/themeActions";
import { themeModes } from "src/styles/theme";

const defaultState = {
  themeMode: themeModes.LIGHT_MODE,
};

interface IThemeAction {
  type: themeActionsEnum;
  payload: themeModes;
}

export const themeReducer = (state = defaultState, action: IThemeAction) => {
  switch (action.type) {
    case themeActionsEnum.CHANGE_THEME:
      return { ...state, themeMode: action.payload };
    default:
      return state;
  }
};
