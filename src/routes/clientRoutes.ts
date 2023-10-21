import FilmPage from "src/client/pages/FilmPage/FilmPage";
import MainPage from "src/client/pages/MainPage/MainPage";

interface IClientRoutes {
  id: number;
  path: string;
  Component: React.FC<any>;
  props?: any;
  isPrivate: boolean
}

export const clientRoutes: IClientRoutes[] = [
    {
        id: 1,
        path: '/main',
        Component: MainPage,
        isPrivate: false
    },
    {
      id: 2,
      path: '/film/:id',
      Component: FilmPage,
      isPrivate: false
    }
]
