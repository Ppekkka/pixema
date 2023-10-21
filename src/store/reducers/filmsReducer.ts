import { IFilm, ISearchFilms } from "src/globalTypes";
import {
  ISetFilmsPayload,
  filmsActionsEnum,
} from "src/store/actions/filmsActions";
import { getFilmsObject } from "src/store/reducers/helpers";

const defaultState = {
  filmsObject: {
    arrayOfFilmsList: [],
    remnant: [],
  },
  totalresults: 0,
};

interface IFilmsAction {
  type: filmsActionsEnum;
  payload: ISetFilmsPayload;
}

export const filmsReducer = (state = defaultState, action: IFilmsAction) => {
  switch (action.type) {
    case filmsActionsEnum.SET_FILMS: {
      if (!state.totalresults) {
        const filmsArr = action.payload.apiFilmsResponse.Search;
        const newFilmsObject = getFilmsObject(
          filmsArr,
          action.payload.filmsPerList
        );
        return {
          ...state,
          filmsObject: newFilmsObject,
          totalresults: action.payload.apiFilmsResponse.totalResults,
        };
      } else {
        const filmsArr = action.payload.apiFilmsResponse.Search;

        const remasteredFilmsObject = getFilmsObject(
          filmsArr,
          action.payload.filmsPerList,
          state.filmsObject
        );

        return { ...state, filmsObject: remasteredFilmsObject };
      }
    }

    default:
      return state;
  }
};
