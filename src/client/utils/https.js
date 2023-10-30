import axios from "axios";

export const filmsUrl = axios.create({
  baseURL: "https://www.omdbapi.com",
});

export const mockRatingUrl = axios.create({
  baseURL: "https://65244c2aea560a22a4e9b70b.mockapi.io/api",
});

export const userUrl = axios.create({
  baseURL: "https://studapi.teachmeskills.by",
});
