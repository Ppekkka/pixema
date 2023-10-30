import { Dispatch } from "redux";
import { userActions } from "src/store/actions/userActions";

export const logOutAsync = () => {
  return async (dispatch: Dispatch) => {
    localStorage.setItem("access", JSON.stringify(""));
    localStorage.setItem("refresh", JSON.stringify(""));

    dispatch(userActions.signOut());
  };
};
