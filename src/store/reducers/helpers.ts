import { IFilmsObject, ISearchFilm } from "src/globalTypes";

export const getFilmsObject = (
  filmsArr: ISearchFilm[],
  limit: number,
  filmsObject?: IFilmsObject
) => {
  if (filmsObject) {
    const neededLimit = limit - filmsObject.remnant.length;

    const anotherFilmsListArr = filmsObject.remnant.concat(
      filmsArr.slice(0, neededLimit)
    );

    const newFilmsList = [...filmsObject.arrayOfFilmsList];
    newFilmsList.push(anotherFilmsListArr);

    const newRemnant = filmsArr.slice(-(filmsArr.length - neededLimit));

    return {
      ...filmsObject,
      arrayOfFilmsList: newFilmsList,
      remnant: newRemnant,
    };
  } else {
    if (filmsArr) {
      const filmsListArr = filmsArr.slice(0, limit);
      const remnantArr = filmsArr.slice(-(filmsArr.length - limit));

      return {
        arrayOfFilmsList: [filmsListArr],
        remnant: remnantArr,
      };
    } else {
      return {
        arrayOfFilmsList: [],
        remnant: [],
      };
    }
  }
};

export const setRemnant = (filmsObject: IFilmsObject) => {
  const filmsListArr = [...filmsObject.arrayOfFilmsList];
  filmsListArr.push(filmsObject.remnant);

  return {
    arrayOfFilmsList: filmsListArr,
    remnant: [],
  };
};
