import { filmsReducer } from "src/store/reducers/filmsReducer";
import { filmsActionsEnum } from "src/store/actions/filmsActions";
import axios from "axios";

jest.mock("axios");

describe("films reducer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return the default state", () => {
    expect(filmsReducer(undefined, {})).toEqual({
      filmsObject: {
        arrayOfFilmsList: [],
        remnant: [],
      },
      totalResults: 0,
      searchTitle: "",
    });
  });

  it("should handle SET_FILMS", () => {
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
      filmsPerList: 2,
    };

    expect(
      filmsReducer([], {
        type: filmsActionsEnum.SET_FILMS,
        payload,
      })
    ).toEqual({
      filmsObject: {
        arrayOfFilmsList: [
          [
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
        ],
        remnant: [
          {
            Poster: "https://i.ytimg.com/vi/OYuDZwJ9Lfw/maxresdefault.jpg",
            Title: "Metalocalypse: The Doomstar Requiem",
            imdbRating: 8.9,
            imdbID: 123,
          },
        ],
      },
      totalResults: 10,
      searchTitle: "",
    });
  });
});
