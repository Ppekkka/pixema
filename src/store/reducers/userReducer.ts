import { IUser } from "src/globalTypes";
import { userActionsEnum } from "src/store/actions/userActions";

const defaultUser = {
  username: null,
};

interface IAction {
  type: userActionsEnum;
  payload: null | IUser;
}

export const userReducer = (state = defaultUser, action: IAction) => {
  switch (action.type) {
    case userActionsEnum.SIGN_UP: {
      return { ...state, username: action.payload };
    }
    case userActionsEnum.LOG_IN: {
      return { ...state, username: action.payload };
    }
    case userActionsEnum.LOG_OUT: {
      return { ...state, username: null };
    }
    default:
      return state;
  }
};
