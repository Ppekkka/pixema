import { refreshUrl, userUrl } from "src/client/utils/https";
import { app } from "src/client/api/firebase";
import { IUserData } from "src/types/globalTypes";

export interface IUpdateProfileData {
  idToken: string;
  displayName: string;
}

export const userApi = {
  signUp: ({ password, email }: Pick<IUserData, "email" | "password">) =>
    userUrl.post(`/accounts:signUp?key=${app.options.apiKey}`, {
      email,
      password,
      returnSecureToken: true,
    }),
  updateProfile: ({ idToken, displayName }: IUpdateProfileData) =>
    userUrl.post(`/accounts:update?key=${app.options.apiKey}`, {
      idToken,
      displayName,
      returnSecureToken: false,
    }),
  signIn: ({ password, email }: Pick<IUserData, "email" | "password">) =>
    userUrl.post(`/accounts:signInWithPassword?key=${app.options.apiKey}`, {
      email,
      password,
      returnSecureToken: true,
    }),
  refreshToken: (token: string) =>
    refreshUrl.post(
      `/token?key=${app.options.apiKey}&grant_type=refresh_token&refresh_token=${token}`
    ),
  getUserData: (idToken: string) =>
    userUrl.post(
      `/accounts:lookup?key=${app.options.apiKey}&idToken=${idToken}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    ),
};
