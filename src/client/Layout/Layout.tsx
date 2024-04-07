import React, { useEffect } from "react";
import Footer from "src/client/Layout/Footer/Footer";
import Header from "src/client/Layout/Header/Header";
import { useSelector } from "react-redux";
import FilterMenu from "src/client/components/FilterMenu/FilterMenu";
import {
  Wrapper,
  SignWrapper,
  PopupIsOpenedBG,
} from "src/client/Layout/styles";
import { Outlet } from "react-router-dom";
import { selectors } from "src/store/selectors/selctors";
import { useAction } from "src/store/hooks/useAction";
import { useIsSign } from "src/store/hooks/useIsSign";

const Layout = () => {
  const isSign = useIsSign();
  const { autoAuthAsync } = useAction();

  useEffect(() => {
    autoAuthAsync();
  }, []);

  const filterMenuIsOpened = useSelector(selectors.getFilterMenuIsOpened);

  return isSign ? (
    <SignWrapper>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      {filterMenuIsOpened && <PopupIsOpenedBG />}
      {filterMenuIsOpened && <FilterMenu />}
    </SignWrapper>
  ) : (
    <Wrapper>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      {filterMenuIsOpened && <PopupIsOpenedBG />}
      {filterMenuIsOpened && <FilterMenu />}
    </Wrapper>
  );
};

export default Layout;
