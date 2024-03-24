import ErrorPage from "src/client/pages/ErrorPage/ErrorPage";
import FavFilmsPage from "src/client/pages/FavFilmsPage/FavFilmsPage";
import FilmPage from "src/client/pages/FilmPage/FilmPage";
import MainPage from "src/client/pages/MainPage/MainPage";
import SettingsPage from "src/client/pages/SettingsPage/SettingsPage";
import ActivateAccountPage from "src/client/pages/UserFormsPages/ActivateAccountPage";
import SignInPage from "src/client/pages/UserFormsPages/SignInPage";
import SignUpPage from "src/client/pages/UserFormsPages/SignUpPage";

interface IClientRoutes {
  id: number;
  path: string;
  Component: React.FC<any>;
  props?: any;
  isPrivate: boolean;
}

export const clientRoutes: IClientRoutes[] = [
  {
    id: 1,
    path: "/main",
    Component: MainPage,
    isPrivate: false,
  },
  {
    id: 2,
    path: "/trends",
    Component: MainPage,
    isPrivate: false,
  },
  {
    id: 3,
    path: "/favourites",
    Component: FavFilmsPage,
    isPrivate: true,
  },
  {
    id: 4,
    path: "/film/:id",
    Component: FilmPage,
    isPrivate: false,
  },
  {
    id: 5,
    path: "/sign-up",
    Component: SignUpPage,
    isPrivate: false,
  },
  {
    id: 6,
    path: "/activate-account",
    Component: ActivateAccountPage,
    isPrivate: false,
  },
  {
    id: 7,
    path: "/activate-account/:uid/:token",
    Component: ActivateAccountPage,
    isPrivate: false,
  },
  {
    id: 8,
    path: "/sign-in",
    Component: SignInPage,
    isPrivate: false,
  },
  {
    id: 9,
    path: "/settings",
    Component: SettingsPage,
    isPrivate: true,
  },
  {
    id: 999,
    path: "/error",
    Component: ErrorPage,
    isPrivate: false,
  },
];
