import thunk from "redux-thunk";
import { filmsActionsEnum } from "src/store/actions/filmsActions";
import { setFilmsAsync } from "src/store/thunks/filmsThunks/setFilmsAsync";
import configureStore from "redux-mock-store";

describe("Set films", () => {
  const initialState = {
    films: {
      filmsObject: {
        arrayOfFilmsList: [],
        remnant: [],
      },
      totalResults: 0,
    },
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  const store = mockStore(initialState);

  it("Should be able to set films", async () => {
    const payload = {
      apiFilmsResponse: {
        Search: [],
        totalResults: 0,
      },
      filmsPerList: 2,
    };

    const expectedActions = [
      {
        type: filmsActionsEnum.SET_FILMS,
        payload,
      },
    ];

    await store.dispatch(setFilmsAsync(true, false, 2));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
