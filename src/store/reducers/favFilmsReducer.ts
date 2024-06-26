import { IFilm } from "src/types/globalTypes";
import { favFilmsActionsEnum } from "src/store/actions/favFilmsActions";

const defaultState = {
  favFilms: [],
};

interface IFavFilmsAction {
  type: favFilmsActionsEnum;
  payload: IFilm;
}

export const favFilmsReducer = (
  state = defaultState,
  action: IFavFilmsAction
) => {
  switch (action.type) {
    case favFilmsActionsEnum.ADD_TO_FAVS: {
      const newfavFilmsArr: IFilm[] = [...state.favFilms];
      newfavFilmsArr.push(action.payload);

      return { ...state, favFilms: newfavFilmsArr };
    }
    case favFilmsActionsEnum.REMOVE_FROM_FAVS: {
      const newfavFilmsArr: IFilm[] = [...state.favFilms];
      const filteredArr = newfavFilmsArr.filter((film) => film.imdbID !== action.payload.imdbID);

      return { ...state, favFilms: filteredArr };
    }
    default:
      return state;
  }
};
