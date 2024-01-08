import React from 'react';
import { PromoFilm } from '../../types/types';
import { Logo } from '../../components/logos/logo';
import { Footer } from '../../components/footers/footer';
import { FilmList } from '../../components/film-list/film-list';
import { GenresList } from './genres-list';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useEffect } from 'react';
import { changeGenre } from '../../store/action';
import { GenreType } from '../../constants/genre-type';

export type MainPageProps = {
  promoFilm: PromoFilm;
}

export function MainPage({promoFilm}: MainPageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.filmsByGenre);
  useEffect(() => {
    dispatch(changeGenre(GenreType.AllGenres));
  }, [dispatch]);
  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.imageSource} alt={promoFilm.title} />
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
              <img src={promoFilm.posterSource} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.premiereYear}</span>
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
          <FilmList films={films}/>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}
