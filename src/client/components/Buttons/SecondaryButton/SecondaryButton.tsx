import React from "react";
import { StyledButton } from "src/client/components/Buttons/SecondaryButton/styles";

interface IProps {
  children: string;
  onClick?: () => void;
}

const SecondaryButton = ({ children, onClick }: IProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default SecondaryButton;
