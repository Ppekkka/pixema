import { Dispatch } from "redux";
import { filmsApi } from "src/client/api/filmsApi";
import { filmsActions } from "src/store/actions/filmsActions";
import { IFilters, ISearchFilms, sortByEnum } from "src/types/globalTypes";
import { getRatingForFilters } from "src/store/thunks/filmsThunks/helpers";
import { filtersACtions } from "src/store/actions/filtersActions";

interface IRating {
  rating: number;
  id: number;
}

const getFilms = async (page: number, year?: number) => {
  const res = await filmsApi.getfilms(page, year);
  return res?.data;
};

const getRatings = async () => {
  const res = await filmsApi.getRatings();
  return res?.data;
};

const getFilmsByYears = async (
  page: number,
  yearFrom: number,
  yearTo: number
) => {
  const filmsRes = await getFilms(page, yearFrom);
  if (filmsRes.Search.length < 0) {
    for (
      let i = yearFrom + 1;
      i <= yearTo && filmsRes.Search.length < 10;
      i++
    ) {
      const restOfFilms = await getFilms(page, i);
      filmsRes.Search.concat(restOfFilms);
      filmsRes.totalResults = restOfFilms.totalResults;
    }
  }
  return filmsRes;
};

export const setFilteredFilmsAsync = (
  isNewFilms: boolean,
  filmsPerList: number,
  page: number,
  filters: IFilters
) => {
  return async (dispatch: Dispatch) => {
    try {
      const films: ISearchFilms =
        filters.yearFrom && filters.yearTo
          ? await getFilmsByYears(page, filters.yearFrom, filters.yearTo)
          : await getFilms(page);

      let ratings: number[] = [];

      if (films) {
        if (filters.ratingFrom && filters.ratingTo) {
          ratings = getRatingForFilters(
            films.Search.length,
            filters.ratingFrom,
            filters.ratingTo
          );
        } else {
          try {
            const ratingsResponse = await getRatings();

            ratings = ratingsResponse.map((ratingObj: IRating) => {
              return ratingObj.rating;
            });
          } catch (error) {
            console.log(error);
          }
        }

        const fullFilms = films.Search.map((film, idx: number) => {
          return { ...film, imdbRating: ratings[idx] };
        });

        let readyFilmsData: ISearchFilms = { ...films, Search: fullFilms };

        if (filters.sortBy === sortByEnum.RATING) {
          readyFilmsData = {
            ...readyFilmsData,
            Search: readyFilmsData.Search.sort(
              (film1, film2) => film1.imdbRating - film2.imdbRating
            ),
          };
        } else if (filters.sortBy === sortByEnum.YEAR) {
          readyFilmsData = {
            ...readyFilmsData,
            Search: readyFilmsData.Search.sort(
              (film1, film2) => film1.Year - film2.Year
            ),
          };
        }

        if (fullFilms) {
          if (
            filters.yearFrom &&
            films.Search[0].Year !== films.Search[films.Search.length - 1].Year
          ) {
            if (films.totalResults > 10) {
              dispatch(
                filtersACtions.changeFilters({
                  yearFrom: +films.Search[films.Search.length - 1].Year,
                })
              );
            } else {
              dispatch(
                filtersACtions.changeFilters({
                  yearFrom: +films.Search[films.Search.length - 1].Year + 1,
                })
              );
            }
          }

          isNewFilms
            ? dispatch(
                filmsActions.setNewFilms({
                  apiFilmsResponse: readyFilmsData,
                  filmsPerList,
                })
              )
            : dispatch(
                filmsActions.setFilms({
                  apiFilmsResponse: readyFilmsData,
                  filmsPerList,
                })
              );
        }
      }
    } catch (error) {
      const emptyObject = {
        Search: [],
        totalResults: 0,
      };
      dispatch(
        filmsActions.setFilms({
          apiFilmsResponse: emptyObject,
          filmsPerList,
        })
      );
    }
  };
};
