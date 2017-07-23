// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  imdbRating: string,
  poster: string,
  trailer: string,
};
