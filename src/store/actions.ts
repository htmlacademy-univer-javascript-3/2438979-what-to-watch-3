import { createAction } from '@reduxjs/toolkit';
import { Film, PromoFilm } from '../types/films';
import { AuthorizationStatus } from '../constants/authorization-status';
import { User } from '../types/auth';

export const changeGenre = createAction<string>('films/changeGenre');

export const showMoreFilms = createAction('films/showMoreFilms');

export const resetFilmsToShowCount = createAction('films/resetFilmsToShowCount');

export const loadFilms = createAction<Film[]>('films/loadFilms');

export const changeFilmsLoadingStatus = createAction<boolean>('data/changeFilmsLoadingStatus');

export const changePromoFilmLoadingStatus = createAction<boolean>('data/changePromoFilmLoadingStatus');

export const setPromoFilm = createAction<PromoFilm>('data/setPromoFilm');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUser = createAction<User | null>('user/setUser');
