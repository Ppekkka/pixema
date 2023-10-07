import React from "react";
import { colourStyles } from "src/client/components/CustomSelect/ReactSelectStyles";
import { StyledSelect } from "src/client/components/CustomSelect/styles";
import Label from "src/client/components/Label/Label";

interface IProps {
  label: string;
  placeholder: string;
  optionsValues: string[];
  isMulti: boolean;
}

const CustomSelect = ({
  label,
  placeholder,
  optionsValues,
  isMulti,
}: IProps) => {
  const options = optionsValues.map((optionValue) => {
    return { value: optionValue, label: optionValue };
  });

  return (
    <Label label={label}>
      {isMulti ? (
        <StyledSelect
          isMulti
          options={options}
          placeholder={placeholder}
          classNamePrefix="react-select"
          styles={colourStyles}
        />
      ) : (
        <StyledSelect
          options={options}
          placeholder={placeholder}
          classNamePrefix="react-select"
        />
      )}
    </Label>
  );
};

export default CustomSelect;
