import { themeActionsEnum } from "src/store/actions/themeActions";
import { themeModes } from "src/styles/theme";

const defaultThemeMode = localStorage.getItem("theme");

const defaultState = {
  themeMode: defaultThemeMode
    ? JSON.parse(defaultThemeMode)
    : themeModes.LIGHT_MODE,
};

interface IThemeAction {
  type: themeActionsEnum;
  payload: themeModes;
}

export const themeReducer = (state = defaultState, action: IThemeAction) => {
  switch (action.type) {
    case themeActionsEnum.CHANGE_THEME: {
      localStorage.setItem("theme", JSON.stringify(action.payload));
      return { ...state, themeMode: action.payload };
    }
    default:
      return state;
  }
};
