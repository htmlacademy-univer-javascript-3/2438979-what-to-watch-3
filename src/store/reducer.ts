import { createReducer } from '@reduxjs/toolkit';
import { Film, FilmDetails, PromoFilm } from '../types/films';
import { changeFilmsLoadingStatus, changeGenre, changePromoFilmLoadingStatus, loadFilmDetails, loadFilmReviews, loadFilms,
  loadSimilarFilms, setIsFilmDetailsLoading,
  requireAuthorization, resetFilmsToShowCount, setPromoFilm, setUser, showMoreFilms } from './actions';
import { ALL_GENRES, FILMS_BATCH_SIZE } from '../constants/constants';
import { AuthorizationStatus } from '../constants/enum-constants/authorization-status';
import { User } from '../types/auth';
import { FilmReview } from '../types/reviews';

type InitialState = {
  genre: string;
  filmsByGenre: Film[];
  filmsByGenreCount: number;
  films: Film[];
  isFilmsLoading: boolean;
  promoFilm: PromoFilm | null;
  isPromoFilmLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  chosenFilm: FilmDetails | null;
  isFilmDetailsLoading: boolean;
  similarFilms: Film[];
  chosenFilmReviews: FilmReview[];
  isReviewCreated: boolean;
}

const initialState: InitialState = {
  genre: ALL_GENRES,
  filmsByGenre: [],
  filmsByGenreCount: FILMS_BATCH_SIZE,
  films: [],
  isFilmsLoading: false,
  promoFilm: null,
  isPromoFilmLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  chosenFilm: null,
  isFilmDetailsLoading: false,
  similarFilms: [],
  chosenFilmReviews: [],
  isReviewCreated: false,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadFilmDetails, (state, action) => {
      state.chosenFilm = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadFilmReviews, (state, action) => {
      state.chosenFilmReviews = action.payload;
    })
    .addCase(setIsFilmDetailsLoading, (state, action) => {
      state.isFilmDetailsLoading = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    });
});
