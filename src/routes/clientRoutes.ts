import TestPage from "src/client/pages/TestPage";

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
        path: '/',
        Component: TestPage,
        isPrivate: false
    }
]
