import React from 'react';
import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';
import { Tabs } from './tabs';
import { FilmList } from '../../components/film-list/film-list';
import { UserBlock } from '../../components/user-block/user-block';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useEffect } from 'react';
import { fetchFilmDetails, fetchFilmReviews, fetchSimilarFilms } from '../../store/api-actions';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { SIMILAR_FILMS_MAX_COUNT } from '../../constants/constants';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/enum-constants/authorization-status';
import { PlayButton } from '../../components/play-button/play-button';
import { FavoritesListButton } from '../../components/favorites-list-button/favorites-list-button';
import { useCallback } from 'react';
import { loadFilmDetails } from '../../store/actions';

export function MoviePage(): JSX.Element {
  const {id} = useParams();
  const filmDetails = useAppSelector((state) => state.chosenFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const isFilmDetailsLoading = useAppSelector((state) => state.isFilmDetailsLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id === undefined) {
      return;
    }
    dispatch(fetchFilmDetails(id));
    dispatch(fetchSimilarFilms(id));
    dispatch(fetchFilmReviews(id));
  }, [dispatch, id]);

  const afterFavoritesCallback = useCallback(() => {
    if (!filmDetails) {
      return;
    }
    dispatch(loadFilmDetails({...filmDetails, isFavorite: !filmDetails.isFavorite}));
  }, [dispatch, filmDetails]);

  if (isFilmDetailsLoading) {
    return <LoadingScreen/>;
  }
  if (!filmDetails) {
    return <NotFoundPage/>;
  }
  return (
    <React.Fragment>
      <section className="film-card film-card--full" style={{background: filmDetails.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmDetails.backgroundImage} alt={filmDetails.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmDetails.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmDetails.genre}</span>
                <span className="film-card__year">{filmDetails.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={filmDetails.id}/>
                <FavoritesListButton film={filmDetails} callback={afterFavoritesCallback}/>
                {authorizationStatus === AuthorizationStatus.Auth &&
                <Link to={`/films/${filmDetails.id}/review`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmDetails.posterImage} alt={`${filmDetails.name} poster`} width="218" height="327" />
            </div>
            <Tabs/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={similarFilms.slice(0, SIMILAR_FILMS_MAX_COUNT)}/>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}
