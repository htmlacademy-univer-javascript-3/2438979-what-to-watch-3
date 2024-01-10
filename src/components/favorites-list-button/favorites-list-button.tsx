import { AuthorizationStatus } from '../../constants/enum-constants/authorization-status';
import { FavoriteStatus } from '../../constants/enum-constants/favorite-status';
import { useAppSelector, useAppDispatch} from '../../hooks/redux-hooks';
import { changeFavoriteFilmStatus } from '../../store/api-actions';
import { FilmDetails, PromoFilm } from '../../types/films';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { AppRoute } from '../../constants/enum-constants/app-route';

export type FavoritesListButtonProps = {
  film: PromoFilm | FilmDetails;
  callback: () => void;
}

export function FavoritesListButton({film, callback}: FavoritesListButtonProps): JSX.Element {
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClick = useCallback(() => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
      return;
    }
    const nextStatus = film.isFavorite ? FavoriteStatus.DeleteFromFavorites : FavoriteStatus.AddToFavorites;
    dispatch(changeFavoriteFilmStatus({filmId: film.id, status: nextStatus}));
    callback();
  }, [authorizationStatus, dispatch, navigate, film, callback]);

  return (
    <button onClick={onClick} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={film.isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      {authorizationStatus === AuthorizationStatus.Auth
        ? <span className="film-card__count">{favoriteFilms.length}</span>
        : null}
    </button>
  );
}
