import { filmsActions, filmsActionsEnum } from "src/store/actions/filmsActions";
import axios from "axios";

jest.mock("axios");

describe("actions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create an action to set films", () => {
    const apiFilmsResponse = {
      Search: [
        {
          Poster: "https://i.ytimg.com/vi/OYuDZwJ9Lfw/maxresdefault.jpg",
          Title: "Metalocalypse: The Doomstar Requiem",
          imdbRating: 8.9,
          imdbID: 123,
        },
        {
          Poster: "https://i.ytimg.com/vi/OYuDZwJ9Lfw/maxresdefault.jpg",
          Title: "Metalocalypse: The Doomstar Requiem",
          imdbRating: 8.9,
          imdbID: 123,
        },
      ],
      totalResults: 10,
    };

    axios.get.mockReturnValue(apiFilmsResponse);

    const payload = {
      apiFilmsResponse,
      filmsPerList: 6,
    };

    const expectedAction = {
      type: filmsActionsEnum.SET_FILMS,
      payload,
    };

    expect(filmsActions.setFilms(payload)).toEqual(expectedAction);
  });

  it("should create an action to search films", () => {
    const apiFilmsResponse = {
      Search: [
        {
          Poster: "https://i.ytimg.com/vi/OYuDZwJ9Lfw/maxresdefault.jpg",
          Title: "Metalocalypse: The Doomstar Requiem",
          imdbRating: 8.9,
          imdbID: 123,
        },
        {
          Poster: "https://i.ytimg.com/vi/OYuDZwJ9Lfw/maxresdefault.jpg",
          Title: "Metalocalypse: The Doomstar Requiem",
          imdbRating: 8.9,
          imdbID: 123,
        },
      ],
      totalResults: 10,
    };

    axios.get.mockReturnValue(apiFilmsResponse);

    const payload = {
      apiFilmsResponse,
      filmsPerList: 6,
      searchTitle: "Meta",
    };

    const expectedAction = {
      type: filmsActionsEnum.SEARCH_FILMS,
      payload,
    };

    expect(filmsActions.searchFilms(payload)).toEqual(expectedAction);
  });
});
