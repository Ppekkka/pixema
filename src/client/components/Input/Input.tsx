import React, { HTMLInputTypeAttribute } from "react";
import { StyledInput } from "src/client/components/Input/styles";

interface IProps {
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | ''
}

const Input = ({ inputType, placeholder, onChange, value }: IProps) => {
  return (
    <div>
      <StyledInput
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
