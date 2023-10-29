import React from "react";
import {
  StyledHeader,
  LogoWrapper,
  Wrapper,
  RightContentWrapper,
  FlexWrapper,
} from "src/client/Layout/Header/styles";
import HeaderMenu from "src/client/components/HeaderMenu/HeaderMenu";
import Search from "src/client/components/Search/Search";
import PixemaSvg from "src/client/components/Svg/PixemaSvg";
import { useLocation } from 'react-router-dom';


const Header = () => {
  const width = window.innerWidth;
  const breakpoint = 768;

  let link = useLocation().pathname;
  const isMain = link.includes('main')

  return width >= breakpoint ? (
    <StyledHeader>
      <Wrapper>
        <LogoWrapper>
          <PixemaSvg />
        </LogoWrapper>
        {isMain && (
          <RightContentWrapper>
            {<Search />}
            <HeaderMenu />
          </RightContentWrapper>
        )}
      </Wrapper>
    </StyledHeader>
  ) : (
    <StyledHeader>
      <Wrapper>
        <FlexWrapper>
          <LogoWrapper>
            <PixemaSvg />
          </LogoWrapper>
          {isMain && <HeaderMenu />}
        </FlexWrapper>

        {isMain && <Search />}
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
