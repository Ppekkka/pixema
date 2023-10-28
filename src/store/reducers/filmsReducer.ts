import { IState } from "src/globalTypes";
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
  totalResults: 0,
  searchTitle: "",
};

interface IFilmsAction {
  type: filmsActionsEnum;
  payload: ISetFilmsPayload;
}

export const filmsReducer = (state = defaultState, action: IFilmsAction) => {
  switch (action.type) {
    case filmsActionsEnum.SET_FILMS: {
      if (!state.totalResults) {
        const filmsArr = action.payload.apiFilmsResponse.Search;
        const newFilmsObject = getFilmsObject(
          filmsArr,
          action.payload.filmsPerList
        );
        return {
          ...state,
          filmsObject: newFilmsObject,
          totalResults: +action.payload.apiFilmsResponse.totalResults,
          searchTitle: "",
        };
      } else {
        const filmsArr = action.payload.apiFilmsResponse.Search;

        const remasteredFilmsObject = getFilmsObject(
          filmsArr,
          action.payload.filmsPerList,
          state.filmsObject
        );

        return {
          ...state,
          filmsObject: remasteredFilmsObject,
          searchTitle: "",
        };
      }
    }

    case filmsActionsEnum.SET_NEW_FILMS: {
      const filmsArr = action.payload.apiFilmsResponse.Search;
      const newFilmsObject = getFilmsObject(
        filmsArr,
        action.payload.filmsPerList
      );
      return {
        ...state,
        filmsObject: newFilmsObject,
        totalResults: +action.payload.apiFilmsResponse.totalResults,
        searchTitle: "",
      };
    }

    case filmsActionsEnum.SEARCH_FILMS: {
      if (!action.payload.apiFilmsResponse.totalResults) {
        return {
          ...state,
          filmsObject: { arrayOfFilmsList: [], remnant: [] },
          totalResults: 0,
          searchTitle: action.payload.searchTitle,
        };
      }
      if (action.payload.searchTitle !== state.searchTitle) {
        const filmsArr = action.payload.apiFilmsResponse.Search;
        const newFilmsObject = getFilmsObject(
          filmsArr,
          action.payload.filmsPerList
        );
        return {
          ...state,
          filmsObject: newFilmsObject,
          totalResults: +action.payload.apiFilmsResponse.totalResults,
          searchTitle: action.payload.searchTitle,
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
