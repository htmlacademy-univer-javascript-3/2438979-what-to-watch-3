import { createAction } from '@reduxjs/toolkit';
import { Film, PromoFilm } from '../types/types';

export const changeGenre = createAction<string>('films/changeGenre');

export const showMoreFilms = createAction('films/showMoreFilms');

export const resetFilmsToShowCount = createAction('films/resetFilmsToShowCount');

export const loadFilms = createAction<Film[]>('films/loadFilms');

export const changeFilmsLoadingStatus = createAction<boolean>('data/changeFilmsLoadingStatus');

export const changePromoFilmLoadingStatus = createAction<boolean>('data/changePromoFilmLoadingStatus');

export const setPromoFilm = createAction<PromoFilm>('data/setPromoFilm');
