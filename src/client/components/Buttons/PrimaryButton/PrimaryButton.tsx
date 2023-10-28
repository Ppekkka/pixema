import React from "react";
import { StyledButton } from "src/client/components/Buttons/PrimaryButton/styles";

interface IProps {
  children: string;
  onClick?: () => void;
}

const PrimaryButton = ({ children, onClick }: IProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default PrimaryButton;
