import React, { useState } from "react";
import {
  StyledInput,
  StyledLabel,
  StyledSwitch,
} from "src/client/components/CustomSwitch/styles";
import { useAction } from "src/store/hooks/useAction";
import { selectors } from "src/store/selectors/selctors";
import { useSelector } from "react-redux";
import { themeModes } from "src/styles/theme";

const CustomSwitch = () => {
  const { changeTheme } = useAction();
  const themeMode = useSelector(selectors.getThemeMode);

  const [checked, setChecked] = useState(themeMode === themeModes.DARK_MODE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme =
      themeMode === themeModes.DARK_MODE
        ? themeModes.LIGHT_MODE
        : themeModes.DARK_MODE;
    changeTheme(newTheme);
    setChecked(event.target.checked);
  };

  return (
    <StyledLabel>
      <StyledInput checked={checked} type="checkbox" onChange={handleChange} />
      <StyledSwitch />
    </StyledLabel>
  );
};

export default CustomSwitch;
