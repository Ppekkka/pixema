import React, { useState } from "react";
import UserMenuContent from "src/client/components/HeaderMenu/UserMenuContent/UserMenuContent";
import User from "src/client/components/HeaderMenu/User/User";
import { useSelector } from "react-redux";
import HamburgerMenu from "src/client/components/HeaderMenu/HamburgerMenu/HamburgerMenu";
import HamburgerMenuContent from "src/client/components/HeaderMenu/HamburgerMenuContent/HamburgerMenuContent";
import { selectors } from "src/store/selectors/selctors";

const HeaderMenu = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  };
  const { username } = useSelector(selectors.getUserInfo);

  const width = window.innerWidth;
  const breakpoint = 1280;

  return width < breakpoint ? (
    <div>
      <div onClick={handleOpenMenu}>
        <HamburgerMenu />
      </div>
      {menuIsOpened && <HamburgerMenuContent />}
    </div>
  ) : (
    <div onClick={handleOpenMenu}>
      <User />
      {menuIsOpened && (
        <UserMenuContent $isAuthorized={!!username}></UserMenuContent>
      )}
    </div>
  );
};

export default HeaderMenu;
