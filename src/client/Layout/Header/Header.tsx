import React from "react";
import {
  StyledHeader,
  LogoWrapper,
  Wrapper,
  RightContentWrapper,
  FlexWrapper
} from "src/client/Layout/Header/styles";
import HeaderMenu from "src/client/components/HeaderMenu/HeaderMenu";
import Search from "src/client/components/Search/Search";
import PixemaSvg from "src/client/components/Svg/PixemaSvg";

const Header = () => {
  const width = window.innerWidth;
  const breakpoint = 768;

  return width >= breakpoint ? (
    <StyledHeader>
      <Wrapper>
        <LogoWrapper>
          <PixemaSvg />
        </LogoWrapper>
        <RightContentWrapper>
          <Search />
          <HeaderMenu />
        </RightContentWrapper>
      </Wrapper>
    </StyledHeader>
  ) : (
    <StyledHeader>
      <Wrapper>
        <FlexWrapper>
          <LogoWrapper>
            <PixemaSvg />
          </LogoWrapper>
          <HeaderMenu />
        </FlexWrapper>

        <Search />
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
