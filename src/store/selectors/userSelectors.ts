import { IState } from "src/globalTypes";

export const userSelectors = {
  getUserInfo: (state: IState) => state.user,
};
