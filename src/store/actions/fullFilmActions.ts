import { IFilm } from "src/types/globalTypes";

export enum fullFilmActionsEnum {
  ADD_FULL_FILM = "ADD_FULL_FILM",
}

export const fullFilmActions = {
  addFullFilm: (payload: IFilm) => {
    return { type: fullFilmActionsEnum.ADD_FULL_FILM, payload };
  },
};
