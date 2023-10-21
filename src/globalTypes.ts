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
  films: {
    filmsObject: IFilmsObject;
    totalresults: number;
  };
  favFilms: {
    favFilms: ISearchFilm[];
  };
  filterMenu: {
    filterMenuIsOpened: boolean;
  };
}

interface Rating {
  Source: string;
  Value: string;
}

export interface IFilm {
  Poster: string;
  Title: string;
  Genre: string;
  Ratings: Rating[];
  Year: number;
  Rated: string;
  Released: string;
  Runtime: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Metascore: string;
  imdbRating: number;
  imdbVotes: number;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

export type ISearchFilm = Pick<IFilm, "Poster" | "Title" | "imdbRating" | "Year" | "Type">;

export interface ISearchFilms {
  Search: ISearchFilm[];
  totalResults: number;
}

export type ICard = Pick<IFilm, "Poster" | "Title" | "imdbRating">;

export interface IFilmsObject {
  arrayOfFilmsList: Array<ISearchFilm[]>;
  remnant: ISearchFilm[];
}

export interface IFilmsObject {
  arrayOfFilmsList: Array<ISearchFilm[]>;
  remnant: ISearchFilm[];
}