import React, { HTMLInputTypeAttribute } from "react";
import { StyledInput } from "src/client/components/Input/styles";
import Label from "src/client/components/Label/Label";

interface IProps {
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
}

const Input = ({ inputType, placeholder }: IProps) => {
  return (
    <div>
      <StyledInput type={inputType} placeholder={placeholder} />
    </div>
  );
};

export default Input;
