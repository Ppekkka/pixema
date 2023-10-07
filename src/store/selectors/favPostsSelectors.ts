import { IState } from "src/globalTypes";

export const favPostsSelectors = {
  getFavPosts: (state: IState) => state.favPosts.favPosts,
};
