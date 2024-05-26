import { Dispatch } from "redux";
import { IUserData } from "src/types/globalTypes";
import { userActions } from "src/store/actions/userActions";
import { signUp, updateProfile } from "src/store/thunks/userThunks/helpers";

export const signUpAsync = (userData: IUserData) => {
  return async (dispatch: Dispatch) => {
    try {
      const { idToken, refreshToken } = await signUp(userData);

      if (idToken && refreshToken && document) {
        localStorage.setItem("idToken", JSON.stringify(idToken));
        localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
      } else return false;

      try {
        const isupdated = !!updateProfile({
          idToken,
          displayName: userData.username,
        });

        if (isupdated) dispatch(userActions.signUp(userData));
      } catch (error) {}
    } catch (error) {}
  };
};
