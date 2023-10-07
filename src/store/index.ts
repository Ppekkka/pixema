import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { themeReducer } from "src/store/reducers/themeReducer";
import { userReducer } from "src/store/reducers/userReducer";
import { favPostsReducer } from "src/store/reducers/favPostsReducer";

const rootReducer = combineReducers({ theme: themeReducer, user: userReducer, favPosts: favPostsReducer });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
