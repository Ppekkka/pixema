import { IUserData } from "src/types/globalTypes";
import { userActionsEnum } from "src/store/actions/userActions";

const defaultUser = {
  user: {
    username: "",
    password: "",
    email: "",
  },
};

interface IUserAction {
  type: userActionsEnum;
  payload: null | IUserData;
}

export const userReducer = (state = defaultUser, action: IUserAction) => {
  switch (action.type) {
    case userActionsEnum.SIGN_UP: {
      return { ...state, user: action.payload };
    }
    case userActionsEnum.SIGN_IN: {
      return { ...state, user: action.payload };
    }
    case userActionsEnum.SIGN_OUT: {
      return { ...state, user: defaultUser };
    }
    default:
      return state;
  }
};
