import React from "react";
import { StyledButton } from "src/client/components/Buttons/PrimaryButton/styles";

interface IProps {
  children: string;
}

const PrimaryButton = ({ children }: IProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default PrimaryButton;
