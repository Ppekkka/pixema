import { Dispatch } from "redux";
import { userActions } from "src/store/actions/userActions";
import {
  getUserData,
  refreshIdToken,
} from "src/store/thunks/userThunks/helpers";

export const autoAuthAsync = () => {
  return async (dispatch: Dispatch) => {
    const idToken = localStorage.getItem("idToken");

    if (idToken) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const { id_token } = await refreshIdToken(JSON.parse(refreshToken));
          localStorage.setItem("idToken", JSON.stringify(id_token));
          const parsedIdToken = JSON.parse(idToken);

          try {
            const userData = await getUserData(parsedIdToken);

            if (userData) dispatch(userActions.signIn(userData));
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      return {};
    }
  };
};
