import { IPost } from "src/globalTypes";

export enum favPostsActionsEnum {
  ADD_TO_FAVS = "ADD_TO_FAVS",
  REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS",
}

export const favPostsActions = {
  addToFavs: (payload: IPost) => {
    return {type: favPostsActionsEnum.ADD_TO_FAVS, payload};
  },
  removeFromFavs: (payload: IPost) => {
    return {type: favPostsActionsEnum.REMOVE_FROM_FAVS, payload};
  },
};
