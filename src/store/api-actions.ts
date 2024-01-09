import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants/api-route';
import { Film, PromoFilm } from '../types/types';
import { changeFilmsLoadingStatus, changePromoFilmLoadingStatus, loadFilms, setPromoFilm } from './actions';

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeFilmsLoadingStatus(true));
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(changeFilmsLoadingStatus(false));
  },
);

export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changePromoFilmLoadingStatus(true));
    const {data} = await api.get<PromoFilm>(APIRoute.PromoFilm);
    dispatch(setPromoFilm(data));
    dispatch(changePromoFilmLoadingStatus(false));
  },
);
