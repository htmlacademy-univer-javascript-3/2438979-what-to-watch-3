import { createReducer } from '@reduxjs/toolkit';
import { Film, PromoFilm } from '../types/types';
import { films } from '../mocks/films';
import { changeFilmsLoadingStatus, changeGenre, changePromoFilmLoadingStatus, loadFilms, resetFilmsToShowCount, setPromoFilm, showMoreFilms } from './actions';
import { ALL_GENRES } from '../constants/constants';
import { FILMS_BATCH_SIZE } from '../constants/constants';

type InitialState = {
  genre: string;
  filmsByGenre: Film[];
  filmsByGenreCount: number;
  films: Film[];
  isFilmsLoading: boolean;
  promoFilm: PromoFilm | null;
  isPromoFilmLoading: boolean;
}

const initialState: InitialState = {
  genre: ALL_GENRES,
  filmsByGenre: films,
  filmsByGenreCount: FILMS_BATCH_SIZE,
  films: films,
  isFilmsLoading: false,
  promoFilm: null,
  isPromoFilmLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsByGenre = state.films.filter((film) => (film.genre === state.genre) || (state.genre === ALL_GENRES));
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsByGenreCount += FILMS_BATCH_SIZE;
    })
    .addCase(resetFilmsToShowCount, (state) => {
      state.filmsByGenreCount = FILMS_BATCH_SIZE;
    })
    .addCase(changeFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(changePromoFilmLoadingStatus, (state, action) => {
      state.isPromoFilmLoading = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    });
});
