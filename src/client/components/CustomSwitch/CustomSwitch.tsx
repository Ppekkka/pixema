import React, { useState } from "react";
import {
  StyledInput,
  StyledLabel,
  StyledSwitch,
} from "src/client/components/CustomSwitch/styles";

const CustomSwitch = () => {
  const [checked, setChecked] = useState(false); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setChecked(event.target.checked);

  return (
    <StyledLabel>
      <StyledInput checked={checked} type="checkbox" onChange={handleChange} />
      <StyledSwitch />
    </StyledLabel>
  );
};

export default CustomSwitch;
