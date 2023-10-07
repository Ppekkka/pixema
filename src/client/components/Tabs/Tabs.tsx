import React, { useState } from "react";
import {
  StyledTab,
  StyledTabsWrapper,
} from "src/client/components/Tabs/styles";

interface TabsProps {
  firstText: string;
  secondText: string;
}

enum valuesEnum {
  FIRST = "FIRST",
  SECOND = "SRCOND",
}

const Tabs = ({firstText, secondText}: TabsProps) => {
  const [active, setActive] = useState(valuesEnum.FIRST);
  const handleClickOnTab = (activeValue: valuesEnum) => {
    setActive(activeValue);
  };

  return (
    <StyledTabsWrapper>
      <StyledTab
        $active={active === valuesEnum.FIRST}
        onClick={() => handleClickOnTab(valuesEnum.FIRST)}
        $isFirst={true}
      >{firstText}</StyledTab>
      <StyledTab
        $active={active === valuesEnum.SECOND}
        onClick={() => handleClickOnTab(valuesEnum.SECOND)}
        $isFirst={false}
      >{secondText}</StyledTab>
    </StyledTabsWrapper>
  );
};

export default Tabs;
