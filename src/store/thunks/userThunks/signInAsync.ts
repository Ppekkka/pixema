import { Dispatch } from "redux";
import { IUserData } from "src/types/globalTypes";
import { userActions } from "src/store/actions/userActions";
import { signIn } from "src/store/thunks/userThunks/helpers";

export const signInAsync = (
  userData: Pick<IUserData, "email" | "password">
) => {
  return async (dispatch: Dispatch) => {
    try {
      const accountData = await signIn(userData);

      if (accountData) dispatch(userActions.signIn(accountData));
    } catch (error) {
      window.location.reload();
    }
  };
};
