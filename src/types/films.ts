export type PromoFilm = {
  id: string;
  name: string;
  genre: string;
  released: number;
  backgroundImage: string;
  posterImage: string;
  videoLink: string;
  isFavorite?: boolean;
}

export type Film = {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type FilmDetails = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite?: boolean;
}
