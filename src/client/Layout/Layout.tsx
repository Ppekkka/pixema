import React from "react";
import Footer from "src/client/Layout/Footer/Footer";
import Header from "src/client/Layout/Header/Header";
import { useSelector } from "react-redux";
import FilterMenu from "src/client/components/FilterMenu/FilterMenu";
import { PopupIsOpenedBG } from "src/client/Layout/styles";
import { Outlet } from "react-router-dom";
import { selectors } from "src/store/selectors/seelctors";

const Layout = () => {
  const filterMenuIsOpened = useSelector(selectors.getFilterMenuIsOpened);

  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      {filterMenuIsOpened && <PopupIsOpenedBG />}
      {filterMenuIsOpened && <FilterMenu />}
    </div>
  );
};

export default Layout;
