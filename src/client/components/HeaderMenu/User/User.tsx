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
import { userSelectors } from "src/store/selectors/userSelectors";
import { useSelector } from "react-redux";


const User = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  };

  const { username } = useSelector(userSelectors.getUserInfo);

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
