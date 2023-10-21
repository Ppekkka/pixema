import { IState } from "src/globalTypes";

export const filmsSelectors = {
  getFilms: (state: IState) => state.films,
};
