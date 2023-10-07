import UserSvg from "src/client/components/Svg/UserSvg";
import { IconInitials, UserText } from "src/client/components/User/styles";

const getInitials = (username: string) => {
  const usernameArr = username.split(" ");
  if (usernameArr.length === 1) return usernameArr[0].toUpperCase();
  else return usernameArr[0].toUpperCase() + usernameArr[0].toUpperCase();
};

export const getIcon = (username: string) => {
  if (username) return <IconInitials>{getInitials(username)}</IconInitials>;
  else return <UserSvg />;
};

export const getUserText = (username: string) => {
  return username ? (
    <UserText>{username}</UserText>
  ) : (
    <UserText>Log In</UserText>
  );
};
