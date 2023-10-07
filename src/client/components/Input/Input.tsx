import React, { HTMLInputTypeAttribute } from "react";
import { StyledInput } from "src/client/components/Input/styles";
import Label from "src/client/components/Label/Label";

interface IProps {
  label: string;
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
}

const Input = ({ label, inputType, placeholder }: IProps) => {
  return (
    <Label label={label}>
      <StyledInput type={inputType} placeholder={placeholder} />
    </Label>
  );
};

export default Input;
