import React, { useState } from "react";
import {
  IconWrapper,
  Wrapper,
  FlexWrapper,
  ArrowWrapper,
} from "src/client/components/User/styles";
import ShortArrowSvg from "src/client/components/Svg/ShortArrowSvg";
import { getIcon, getUserText } from "src/client/components/User/helpers";
import { userSelectors } from "src/store/selectors/userSelectors";
import { useSelector } from "react-redux";
import UserMenu from "src/client/components/User/UserMenu/UserMenu";

const User = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  };

  const { username } = useSelector(userSelectors.getUserInfo);

  return (
    <div>
      <Wrapper onClick={handleOpenMenu}>
        <FlexWrapper>
          <IconWrapper>{getIcon(username)}</IconWrapper>
          {getUserText(username)}
        </FlexWrapper>
        <ArrowWrapper $menuIsOpened={menuIsOpened}>
          <ShortArrowSvg />
        </ArrowWrapper>
      </Wrapper>
        {menuIsOpened && <UserMenu $isAuthorized={!!username}></UserMenu>}
    </div>
  );
};

export default User;
