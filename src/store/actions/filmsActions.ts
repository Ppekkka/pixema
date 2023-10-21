import { ISearchFilms } from "src/globalTypes";

export enum filmsActionsEnum {
  SET_FILMS = "SET_FILMS",
  SELECT_NEW_SECTION = "SELECT_NEW_SECTION",
}

export interface ISetFilmsPayload {
  apiFilmsResponse: ISearchFilms;
  filmsPerList: number;
}

export const filmsActions = {
  setFilms: (payload: ISetFilmsPayload) => {
    return { type: filmsActionsEnum.SET_FILMS, payload };
  },
  selectNewSection: (payload: ISetFilmsPayload) => {
    return { type: filmsActionsEnum.SELECT_NEW_SECTION, payload };
  },
};
