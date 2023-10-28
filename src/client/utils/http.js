import axios from "axios";

export const client = axios.create({
  baseURL: "https://www.omdbapi.com",
});

export const mockRating = client.create({
  baseURL: "https://65244c2aea560a22a4e9b70b.mockapi.io/api",
});
