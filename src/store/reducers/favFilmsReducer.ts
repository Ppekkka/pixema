import { IFilm } from "src/globalTypes";
import { favFilmsActionsEnum } from "src/store/actions/favFilmsActions";

const defaultState = {
  favFilms: [],
};

interface favFilmsAction {
  type: favFilmsActionsEnum;
  payload: IFilm;
}

export const favFilmsReducer = (
  state = defaultState,
  action: favFilmsAction
) => {
  switch (action.type) {
    case favFilmsActionsEnum.ADD_TO_FAVS: {
      const newfavFilmsArr: IFilm[] = [...state.favFilms];
      newfavFilmsArr.push(action.payload);

      return { ...state, favFilms: newfavFilmsArr };
    }
    case favFilmsActionsEnum.REMOVE_FROM_FAVS: {
      const newfavFilmsArr: IFilm[] = [...state.favFilms];
      newfavFilmsArr.filter((film) => film !== action.payload);

      return { ...state, favFilms: newfavFilmsArr };
    }
    default:
      return state;
  }
};
