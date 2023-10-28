import { ISearchFilm } from "src/globalTypes";



// const getAllPages = (totalResults: number) => {
//   const pages = Math.ceil(totalResults / 10);
//   return pages;
// };

// export const getIsThereMoreFilms = (
//   totalResults: number,
//   page: number,
//   remnant: ISearchFilm[]
// ) => {
//   const allPages = getAllPages(totalResults);
//   return !(allPages === page) || remnant.length;
// };

export const getPage = (
  page: number,
  firstFilm: ISearchFilm,
  lastFilm: ISearchFilm
) => {
  const shouldUpdatePage = !(firstFilm.Year === lastFilm.Year);
  return shouldUpdatePage ? 1 : page + 1;
};
