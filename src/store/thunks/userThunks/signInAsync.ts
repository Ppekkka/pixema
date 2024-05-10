import { Dispatch } from "redux";
import { IUserData } from "src/types/globalTypes";
import { userActions } from "src/store/actions/userActions";
import { signIn } from "src/store/thunks/userThunks/helpers";

export const signInAsync = (
  userData: Pick<IUserData, "email" | "password">
) => {
  return async (dispatch: Dispatch) => {
    try {
      try {
        const accountData = await signIn(userData);

        console.log(accountData);

        if (accountData) dispatch(userActions.signIn(accountData));
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
