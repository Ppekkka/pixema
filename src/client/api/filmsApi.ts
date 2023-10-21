import { client, mockRating } from "src/client/utils/http";

export const filmsApi = {
  getfilms: (page: number = 1) => client.get(`/?s=snow&page=${page}&apikey=9d0e2764`),
  getRatings: () => mockRating.get("/rating"),
};
