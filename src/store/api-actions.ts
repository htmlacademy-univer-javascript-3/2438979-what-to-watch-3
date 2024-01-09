import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants/api-route';
import { Film, PromoFilm } from '../types/films';
import { changeFilmsLoadingStatus, changePromoFilmLoadingStatus, loadFilms, requireAuthorization, setPromoFilm, setUser } from './actions';
import { LoginData, User } from '../types/auth';
import { saveToken, dropToken } from '../services/token';
import { AuthorizationStatus } from '../constants/authorization-status';

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

export const login = createAsyncThunk<void, LoginData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUser(data));
  },
);

export const checkAuthorization = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthorization',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<User>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUser(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUser(null));
  }
);
