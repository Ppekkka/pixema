import { User, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/client/api/firebase";
import { userApi } from "src/client/api/userApi";
import { IUserData } from "src/types/globalTypes";

export const signIn = async (
  userData: Pick<IUserData, "email" | "password">
) => {
  const accountData = await signInWithEmailAndPassword(
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
      } else return undefined;

      const newUserData = {
        password: userData.password,
        email: userData.email,
        username: user.displayName!,
      };

      return newUserData;
    })
    .catch((error) => {
      return undefined;
    });

  return accountData;
};

export const getIdToken = async (user: User) => {
  const res = await user.getIdTokenResult(true);
  return res.token;
};

export const refreshIdToken = async (token: string) => {
  const res = await userApi.refreshToken(token);
  return res?.data;
};

export const getUserData = async (idToken: string) => {
  const res = await userApi.getUserData(idToken);
  const data = res?.data;

  const username = data.users[0].displayName;
  const email = data.users[0].email;
  const password = data.passwordHash;
  return { username, email, password };
};
