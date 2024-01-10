import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants/enum-constants/api-route';
import { Film, FilmDetails, PromoFilm } from '../types/films';
import { changeFilmsLoadingStatus, changePromoFilmLoadingStatus, loadFilms, requireAuthorization,
  setPromoFilm, setUser, setIsFilmDetailsLoading, loadFilmDetails, loadSimilarFilms, loadFilmReviews } from './actions';
import { LoginData, User } from '../types/auth';
import { saveToken, dropToken } from '../services/token';
import { AuthorizationStatus } from '../constants/enum-constants/authorization-status';
import { FilmReview, FilmReviewRequest } from '../types/reviews';

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

export const fetchFilmDetails = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmDetails',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(setIsFilmDetailsLoading(true));
    const response = await api.get<FilmDetails>(`${APIRoute.Films}/${filmId}`);
    if (response.status === 200) {
      dispatch(loadFilmDetails(response.data));
    }
    dispatch(setIsFilmDetailsLoading(false));
  }
);

export const fetchSimilarFilms = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    const response = await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`);
    if (response.status === 200) {
      dispatch(loadSimilarFilms(response.data));
    }
  }
);

export const fetchFilmReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmReviews',
  async (filmId, {dispatch, extra: api}) => {
    const response = await api.get<FilmReview[]>(`${APIRoute.Reviews}/${filmId}`);
    if (response.status === 200) {
      dispatch(loadFilmReviews(response.data));
    }
  }
);

export const createFilmReview = createAsyncThunk<void, FilmReviewRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/createFilmReview',
  async ({filmId, comment, rating}, {dispatch, extra: api}) => {
    const response = await api.post(`${APIRoute.Reviews}/${filmId}`, {comment, rating});
    if (response.status === 201) {
      dispatch(fetchFilmReviews(filmId));
    }
  }
);
