import { IPost } from "src/globalTypes";
import { favPostsActionsEnum } from "src/store/actions/favPostsActions";

const defaultState = {
  favPosts: [],
};

interface favPostsAction {
  type: favPostsActionsEnum;
  payload: IPost;
}

export const favPostsReducer = (
  state = defaultState,
  action: favPostsAction
) => {
  switch (action.type) {
    case favPostsActionsEnum.ADD_TO_FAVS: {
      const newFavPostsArr: IPost[] = [...state.favPosts];
      newFavPostsArr.push(action.payload);

      return { ...state, favPosts: newFavPostsArr };
    }
    case favPostsActionsEnum.REMOVE_FROM_FAVS: {
      const newFavPostsArr: IPost[] = [...state.favPosts];
      newFavPostsArr.filter((post) => post !== action.payload);

      return { ...state, favPosts: newFavPostsArr };
    }
    default:
      return state;
  }
};
