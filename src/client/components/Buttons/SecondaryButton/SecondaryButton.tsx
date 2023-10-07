import React from "react";
import { StyledButton } from "src/client/components/Buttons/SecondaryButton/styles";

interface IProps {
  children: string;
}

const SecondaryButton = ({ children }: IProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default SecondaryButton;
