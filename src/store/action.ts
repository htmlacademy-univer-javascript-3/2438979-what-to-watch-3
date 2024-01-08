import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('main/changeGenre', (value: string) => ({
  payload: value,
}));
