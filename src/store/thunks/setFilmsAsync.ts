import { Dispatch } from "redux";
import { filmsApi } from "src/client/api/filmsApi";
import { filmsActions } from "src/store/actions/filmsActions";
import { IFilm } from "src/globalTypes";

const getFilms = async (page?: number) => {
  const res = await filmsApi.getfilms(page);
  return res?.data;
};

const getRatings = async () => {
  const res = await filmsApi.getRatings();
  return res?.data;
};

export const setFilmsAsync = (filmsPerList: number, page?: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const films = await getFilms(page);
      const ratings = await getRatings();

      const fullFilms = films.Search.map((film: IFilm, idx: number) => {
        return { ...film, imdbRating: +ratings[idx].rating };
      });

      const readyFilmsData = { ...films, Search: fullFilms };

      if (fullFilms)
        dispatch(
          filmsActions.setFilms({ apiFilmsResponse: readyFilmsData, filmsPerList })
        );
    } catch (error) {
      console.log(error);
    }
  };
};
