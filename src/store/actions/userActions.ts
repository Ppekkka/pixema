import { IUser } from "src/globalTypes";

export enum userActionsEnum {
  SIGN_UP = "SIGN_UP",
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
}

export const userActions = {
  signUp: (payload: IUser) => {
    return { type: userActionsEnum.SIGN_UP, payload };
  },
  logIn: (payload: IUser) => {
    return { type: userActionsEnum.LOG_IN, payload };
  },
  logOut: () => {
    return { type: userActionsEnum.LOG_OUT, payload: null };
  },
};
