import React, { ReactElement } from "react";
import { StyledLabel } from "src/client/components/Label/styles";

interface IProps {
  label: string;
  children: ReactElement<any, any> | ReactElement<any, any>[];
}

const Label = ({ label, children }: IProps) => {
  return (
    <StyledLabel>
      {label}
      {children}
    </StyledLabel>
  );
};

export default Label;
