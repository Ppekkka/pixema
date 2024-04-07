import { IFilm } from "src/types/globalTypes";
import { fullFilmActionsEnum } from "src/store/actions/fullFilmActions";

const defaultState = {
  film: {},
};

interface fullFilmAction {
  type: fullFilmActionsEnum;
  payload: IFilm;
}

export const fullFilmReducer = (
  state = defaultState,
  action: fullFilmAction
) => {
  switch (action.type) {
    case fullFilmActionsEnum.ADD_FULL_FILM: {
      return { ...state, film: action.payload };
    }
    default:
      return state;
  }
};
