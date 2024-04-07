import { userUrl } from "src/client/utils/https";
import { IUserData } from "src/types/globalTypes";

export interface IResetPasswordConfirmData {
  uid: string;
  token: string;
  new_password: string;
}

export const userApi = {
  signUp: (userData: IUserData) => userUrl.post(`/auth/users/`, { ...userData }),
  activateAccount: (uid: string, token: string) =>
    userUrl.post("/auth/users/activation/", { uid, token }),
  getTokens: (email: string, password: string) =>
    userUrl.post("/auth/jwt/create/", { email, password }),
  verifyToken: (token: string) => userUrl.post("/auth/jwt/verify/", { token }),
  refreshToken: (refresh: string) =>
    userUrl.post("/auth/jwt/refresh/", { refresh }),
  signIn: (token: string) =>
    userUrl.get("/auth/users/me/", {
      headers: { Authorization: `Bearer ${token}` },
    }),
  resetPassword: (email: string) =>
    userUrl.post("/auth/users/reset_password/", { email }),
  resetPasswordConfirm: (resetPasswordConfirmData: IResetPasswordConfirmData) =>
    userUrl.post("/auth/users/reset_password_confirm/", {
      ...resetPasswordConfirmData,
    }),
  setPassword: (new_password: string, current_password: string) =>
    userUrl.post("/auth/users/set_password/", {
      new_password,
      current_password,
    }),
};
