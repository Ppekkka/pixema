import { IFilm, ISearchFilms } from "src/globalTypes";

export enum filmsActionsEnum {
  SET_FILMS = "SET_FILMS",
}

export interface ISetFilmsPayload {
  apiFilmsResponse: ISearchFilms, 
  filmsPerList: number
}

export const filmsActions = {
  setFilms: (payload: ISetFilmsPayload) => {
    return { type: filmsActionsEnum.SET_FILMS, payload };
  },
};
