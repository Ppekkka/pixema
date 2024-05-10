import { Dispatch } from "redux";
import { IUserData } from "src/types/globalTypes";
import { userActions } from "src/store/actions/userActions";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "src/client/api/firebase";
import { getIdToken } from "src/store/thunks/userThunks/helpers";




const signUp = async (userData: IUserData) => {
  const isSignedUp = await createUserWithEmailAndPassword(
    auth,
    userData.email,
    userData.password
  )
    .then(async (userCredential) => {
      const user = userCredential.user;

      const idToken = await getIdToken(user);
      const refreshToken = user.refreshToken;

      if (idToken && refreshToken && document) {
        localStorage.setItem("idToken", JSON.stringify(idToken));
        localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
      } else return false;

      updateProfile(auth.currentUser!, {
        displayName: userData.username,
      });
    })
    .catch((error) => {
      return false;
    });

  return isSignedUp;
};

export const signUpAsync = (userData: IUserData) => {
  return async (dispatch: Dispatch) => {
    try {
      const isSignedUp = await signUp(userData);
      if (isSignedUp) dispatch(userActions.signUp(userData));
    } catch (error) {}
  };
};
