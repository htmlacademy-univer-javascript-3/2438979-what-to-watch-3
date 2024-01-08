import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/types';
import { films } from '../mocks/films';
import { changeGenre, resetFilmsToShowCount, showMoreFilms } from './action';
import { GenreType } from '../constants/genre-type';
import { FILMS_BATCH_SIZE } from '../constants/integer-constants';

type InitialState = {
  genre: string;
  filmsByGenre: Film[];
  filmsByGenreCount: number;
  films: Film[];
}

const initialState: InitialState = {
  genre: GenreType.AllGenres,
  filmsByGenre: films,
  filmsByGenreCount: FILMS_BATCH_SIZE,
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsByGenre = state.films.filter((film) => (film.genre === state.genre) || (state.genre === GenreType.AllGenres));
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsByGenreCount += FILMS_BATCH_SIZE;
    })
    .addCase(resetFilmsToShowCount, (state) => {
      state.filmsByGenreCount = FILMS_BATCH_SIZE;
    });
});
