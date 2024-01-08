import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/types';
import { films } from '../mocks/films';
import { changeGenre } from './action';
import { GenreType } from '../constants/genre-type';

type InitialState = {
  genre: string;
  filmsByGenre: Film[];
  films: Film[];
}

const initialState: InitialState = {
  genre: GenreType.AllGenres,
  filmsByGenre: films,
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filmsByGenre = state.films.filter((film) => (film.genre === state.genre) || (state.genre === GenreType.AllGenres));
    });
});
