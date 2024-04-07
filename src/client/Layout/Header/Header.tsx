import React from "react";
import {
  StyledHeader,
  SignHeader,
  LogoWrapper,
  Wrapper,
  RightContentWrapper,
  FlexWrapper,
} from "src/client/Layout/Header/styles";
import HeaderMenu from "src/client/components/HeaderMenu/HeaderMenu";
import Search from "src/client/components/Search/Search";
import PixemaSvg from "src/client/components/Svg/PixemaSvg";
import { useIsSign } from "src/store/hooks/useIsSign";


const Header = () => {
  const width = window.innerWidth;
  const breakpoint = 768;

  const isSign = useIsSign()

  const Header = isSign ? SignHeader : StyledHeader;

  return width >= breakpoint ? (
    <Header>
      <Wrapper>
        <LogoWrapper>
          <PixemaSvg />
        </LogoWrapper>
        { !isSign && (
          <RightContentWrapper>
            {<Search />}
            <HeaderMenu />
          </RightContentWrapper>
        )}
      </Wrapper>
    </Header>
  ) : (
    <Header>
      <Wrapper>
        <FlexWrapper>
          <LogoWrapper>
            <PixemaSvg />
          </LogoWrapper>
          <HeaderMenu />
        </FlexWrapper>

        {!isSign && <Search />}
      </Wrapper>
    </Header>
  );
};

export default Header;
