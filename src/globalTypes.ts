import { themeModes } from "src/styles/theme";

export interface IUser {
  username: string;
}

export interface IState {
  theme: {
    themeMode: themeModes;
  };
  user: {
    username: string;
  };
  favPosts: {
    favPosts: IPost[];
  };
}

export interface IPost {
  image: string;
  title: string;
  genres: string;
  rating: number;
}
