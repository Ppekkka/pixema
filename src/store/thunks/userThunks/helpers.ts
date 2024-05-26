import { IUpdateProfileData, userApi } from "src/client/api/userApi";
import { IUserData } from "src/types/globalTypes";

export const signUp = async (
  userData: Pick<IUserData, "email" | "password">
) => {
  const res = await userApi.signUp(userData);
  return res?.data;
};

export const updateProfile = async (updateProfileData: IUpdateProfileData) => {
  const res = await userApi.updateProfile(updateProfileData);
  return res?.data;
};

export const signIn = async (
  userData: Pick<IUserData, "email" | "password">
) => {
  const res = await userApi.signIn(userData);
  return res.data;
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
