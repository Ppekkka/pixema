import { ISearchFilm } from "src/types/globalTypes";

export const getFilmsArr = (arr: ISearchFilm[], size: number) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};
