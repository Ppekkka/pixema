import Card from "src/client/components/Card/Card";
import axios from "axios";
import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { createTheme } from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import thunk from "redux-thunk";

jest.mock("axios");

describe("Card component test", () => {
  const initialState = {
    favFilms: {
      favFilms: [],
    },
  };
  const middlewares = [thunk];

  const mockStore = configureStore(middlewares);

  let store;
  let response;

  beforeEach(() => {
    response = {
      Poster: "https://i.ytimg.com/vi/OYuDZwJ9Lfw/maxresdefault.jpg",
      Title: "Metalocalypse: The Doomstar Requiem",
      imdbRating: 8.9,
      imdbID: 123,
    };

    store = mockStore(initialState);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("has a common rating", async () => {
    response = {
      Poster: "https://i.ytimg.com/vi/OYuDZwJ9Lfw/maxresdefault.jpg",
      Title: "Metalocalypse: The Doomstar Requiem",
      imdbRating: 3,
      imdbID: 123,
    };

    axios.get.mockReturnValue(response);

    render(
      <Provider store={store}>
        <ThemeProvider theme={createTheme("LIGHT_MODE")}>
          <MemoryRouter initialEntries={["/"]}>
            <Card
              imdbID={response.imdbID}
              Poster={response.Poster}
              Title={response.Title}
              imdbRating={response.imdbRating}
            />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );

    const rating = await screen.findByTestId("common-rating");
    expect(rating).toBeInTheDocument();
  });

  it("has a hot rating", async () => {
    axios.get.mockReturnValue(response);

    render(
      <Provider store={store}>
        <ThemeProvider theme={createTheme("LIGHT_MODE")}>
          <MemoryRouter initialEntries={["/"]}>
            <Card
              imdbID={response.imdbID}
              Poster={response.Poster}
              Title={response.Title}
              imdbRating={response.imdbRating}
            />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );

    const rating = await screen.findByTestId("hot-rating");
    expect(rating).toBeInTheDocument();
  });

  it("doesn't have a fav pin", async () => {
    axios.get.mockReturnValue(response);

    render(
      <Provider store={store}>
        <ThemeProvider theme={createTheme("LIGHT_MODE")}>
          <MemoryRouter initialEntries={["/"]}>
            <Card
              imdbID={response.imdbID}
              Poster={response.Poster}
              Title={response.Title}
              imdbRating={response.imdbRating}
            />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );

    const favPin = await screen.queryByTestId("fav-pin");
    expect(favPin).toBeNull();
  });

  it("has a fav-pin", () => {
    initialState.favFilms.favFilms = [
      {
        Poster: "https://i.ytimg.com/vi/OYuDZwJ9Lfw/maxresdefault.jpg",
        Title: "Metalocalypse: The Doomstar Requiem",
        imdbRating: 8.9,
        imdbID: 123,
      },
    ];

    axios.get.mockReturnValue(response);

    render(
      <Provider store={store}>
        <ThemeProvider theme={createTheme("LIGHT_MODE")}>
          <MemoryRouter initialEntries={["/"]}>
            <Card
              imdbID={response.imdbID}
              Poster={response.Poster}
              Title={response.Title}
              imdbRating={response.imdbRating}
            />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );

    const favPin = screen.getByTestId("fav-pin");
    expect(favPin).toBeInTheDocument();
  });

  test("click on link event", () => {
    axios.get.mockReturnValue(response);

    render(
      <Provider store={store}>
        <ThemeProvider theme={createTheme("LIGHT_MODE")}>
          <MemoryRouter initialEntries={["/"]}>
            <Card
              imdbID={response.imdbID}
              Poster={response.Poster}
              Title={response.Title}
              imdbRating={response.imdbRating}
            />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );

    const Link = screen.getByTestId("link");

    act(async () => {
      fireEvent.click(Link);

      await waitFor(() => expect(window.location.href).toContain("/film"));
    });
  });
});
