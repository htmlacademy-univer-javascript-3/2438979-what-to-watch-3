import React from 'react';
import { Logo } from '../../components/logos/logo';
import { Footer } from '../../components/footers/footer';
import { FilmList } from '../../components/film-list/film-list';
import { GenresList } from './genres-list';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useEffect } from 'react';
import { changeGenre, resetFilmsToShowCount } from '../../store/actions';
import { ALL_GENRES } from '../../constants/constants';
import { ShowMoreButton } from './show-more';

export function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.filmsByGenre);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const filmsToShowCount = useAppSelector((state) => state.filmsByGenreCount);
  useEffect(() => {
    dispatch(changeGenre(ALL_GENRES));
    dispatch(resetFilmsToShowCount());
  }, [dispatch]);
  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
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
