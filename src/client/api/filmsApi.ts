import { client, mockRating } from "src/client/utils/http";
import { IFilm } from "src/globalTypes";

export const filmsApi = {
  getfilms: (page: number = 1, year?: number) =>
    client.get(`/?s=snow&page=${page}&apikey=9d0e2764&y=${year}`),

  getRatings: () => mockRating.get("/rating"),

  searchFilms: (searchTitle: string, page: number = 1) =>
    client.get(`/?s=${searchTitle}&page=${page}&apikey=9d0e2764`),

  getFullFilm: (id: string) => client.get<IFilm>(`/?i=${id}&apikey=9d0e2764`),
};
