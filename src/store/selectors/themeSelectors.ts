import { IState } from "src/globalTypes";

export const themeSelectors = {
  getThemeMode: (state: IState) => state.theme.themeMode,
};
