import { refreshUrl, userUrl } from "src/client/utils/https";
import { app } from "src/client/api/firebase";

export const userApi = {
  refreshToken: (token: string) =>
    refreshUrl.post(
      `/token?key=${app.options.apiKey}&grant_type=refresh_token&refresh_token=${token}`
    ),
  getUserData: (idToken: string) =>
    userUrl.post(`/accounts:lookup?key=${app.options.apiKey}&idToken=${idToken}`, {
      headers: { "Content-Type": "application/json" },
    }),
};
