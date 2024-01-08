import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('main/changeGenre', (value: string) => ({
  payload: value,
}));

export const showMoreFilms = createAction('main/showMoreFilms');

export const resetFilmsToShowCount = createAction('main/resetFilmsToShowCount');
