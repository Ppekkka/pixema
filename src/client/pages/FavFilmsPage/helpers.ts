import { IFilm } from "src/types/globalTypes";

export const getFilmsArr = (arr: IFilm[], size: number) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};
