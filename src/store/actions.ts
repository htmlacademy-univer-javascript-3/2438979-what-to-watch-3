import { createAction } from '@reduxjs/toolkit';
import { Film, PromoFilm, FilmDetails } from '../types/films';
import { AuthorizationStatus } from '../constants/enum-constants/authorization-status';
import { User } from '../types/auth';
import { FilmReview } from '../types/reviews';

export const changeGenre = createAction<string>('films/changeGenre');

export const showMoreFilms = createAction('films/showMoreFilms');

export const resetFilmsToShowCount = createAction('films/resetFilmsToShowCount');

export const loadFilms = createAction<Film[]>('films/loadFilms');

export const changeFilmsLoadingStatus = createAction<boolean>('data/changeFilmsLoadingStatus');

export const changePromoFilmLoadingStatus = createAction<boolean>('data/changePromoFilmLoadingStatus');

export const setPromoFilm = createAction<PromoFilm>('data/setPromoFilm');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUser = createAction<User | null>('user/setUser');

export const loadFilmDetails = createAction<FilmDetails | null>('films/id/loadFilmDetails');

export const loadSimilarFilms = createAction<Film[]>('films/id/loadSimilarFilms');

export const loadFilmReviews = createAction<FilmReview[]>('films/id/loadFilmReviews');

export const setIsFilmDetailsLoading = createAction<boolean>('data/setIsFilmDetailsLoading');
