import Card from "src/client/components/Card/Card";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { createTheme } from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";


jest.mock("axios");

describe("Card component test", () => {
  const initialState = {
    favFilms: {
      favFilms: [],
    },
  };
  const mockStore = configureStore();

  let store;
  let response;

  beforeEach(() => {
    response = {
      Poster: "https://i.ytimg.com/vi/OYuDZwJ9Lfw/maxresdefault.jpg",
      Title: "Metalocalypse: The Doomstar Requiem",
      imdbRating: 7.9,
      imdbID: 123,
    };

    store = mockStore(initialState);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("has a rating", async () => {
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

    const rating = await screen.findByTestId("rating");
    expect(rating).toBeInTheDocument();
  });
});
