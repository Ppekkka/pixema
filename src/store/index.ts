import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { themeReducer } from "src/store/reducers/themeReducer";
import { userReducer } from "src/store/reducers/userReducer";
import { favFilmsReducer } from "src/store/reducers/favFilmsReducer";
import { filmsReducer } from "src/store/reducers/filmsReducer";
import { filterMenuReducer } from "src/store/reducers/filterMenuReducer";
import { sectionsReducer } from "src/store/reducers/sectionsReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  favFilms: favFilmsReducer,
  films: filmsReducer,
  filterMenu: filterMenuReducer,
  sections: sectionsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
