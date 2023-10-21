import { IState } from "src/globalTypes";

export const favFilmsSelectors = {
  getfavFilms: (state: IState) => state.favFilms.favFilms,
};
