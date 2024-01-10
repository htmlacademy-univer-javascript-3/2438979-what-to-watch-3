import React from 'react';
import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';
import { FilmList } from '../../components/film-list/film-list';
import { GenresList } from './genres-list';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useEffect } from 'react';
import { changeGenre, resetFilmsToShowCount, setPromoFilm } from '../../store/actions';
import { ALL_GENRES } from '../../constants/constants';
import { ShowMoreButton } from './show-more';
import { UserBlock } from '../../components/user-block/user-block';
import { PlayButton } from '../../components/play-button/play-button';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { FavoritesListButton } from '../../components/favorites-list-button/favorites-list-button';
import { useCallback } from 'react';

export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.filmsByGenre);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const filmsToShowCount = useAppSelector((state) => state.filmsByGenreCount);
  useEffect(() => {
    dispatch(changeGenre(ALL_GENRES));
    dispatch(resetFilmsToShowCount());
  }, [dispatch]);

  const afterFavoritesCallback = useCallback(() => {
    if (!promoFilm) {
      return;
    }
    dispatch(setPromoFilm({...promoFilm, isFavorite: !promoFilm.isFavorite}));
  }, [dispatch, promoFilm]);

  if (!promoFilm) {
    return <LoadingScreen/>;
  }

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={promoFilm.id}/>
                <FavoritesListButton film={promoFilm} callback={afterFavoritesCallback}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList/>
          <FilmList films={films.slice(0, filmsToShowCount)}/>
          {filmsToShowCount < films.length ? <ShowMoreButton/> : null}
        </section>
        <Footer/>
      </div>
    </React.Fragment>
  );
}
