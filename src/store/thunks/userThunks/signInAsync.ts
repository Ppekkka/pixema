import { Dispatch } from "redux";
import { IUserData } from "src/types/globalTypes";
import { userActions } from "src/store/actions/userActions";
import { getUserData, signIn } from "src/store/thunks/userThunks/helpers";

export const signInAsync = (
  userData: Pick<IUserData, "email" | "password">
) => {
  return async (dispatch: Dispatch) => {
    try {
      const { idToken, refreshToken } = await signIn(userData);

      try {
        const { username } = await getUserData(idToken);

        if (idToken && refreshToken && document) {
          localStorage.setItem("idToken", JSON.stringify(idToken));
          localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
        } else return undefined;

        const newUserData = {
          password: userData.password,
          email: userData.email,
          username: username,
        };

        if (newUserData) dispatch(userActions.signIn(newUserData));
      } catch (error) {}
    } catch (error) {
      window.location.reload();
    }
  };
};
