import React, { useState } from "react";
import {
  IconWrapper,
  Wrapper,
  FlexWrapper,
  ArrowWrapper,
} from "src/client/components/HeaderMenu/User/styles";
import ShortArrowSvg from "src/client/components/Svg/ShortArrowSvg";
import {
  getIcon,
  getUserText,
} from "src/client/components/HeaderMenu/User/helpers";
import { useSelector } from "react-redux";
import { selectors } from "src/store/selectors/selctors";


const User = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  };

  const { username } = useSelector(selectors.getUserInfo);

  return (
    <Wrapper onClick={handleOpenMenu}>
      <FlexWrapper>
        <IconWrapper>{getIcon(username)}</IconWrapper>
        {getUserText(username)}
      </FlexWrapper>
      <ArrowWrapper $menuIsOpened={menuIsOpened}>
        <ShortArrowSvg />
      </ArrowWrapper>
    </Wrapper>
  );
};

export default User;
