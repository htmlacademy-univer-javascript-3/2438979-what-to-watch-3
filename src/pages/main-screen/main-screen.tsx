import React from 'react';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { Film } from '../../types/types';

type MainScreenProps = {
    promoFilm: Film;
}

function MainScreen({promoFilm}: MainScreenProps): JSX.Element {
  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={promoFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

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
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
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

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <SmallFilmCard title="Fantastic Beasts: The Crimes of Grindelwald" imageSrc="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" />
            <SmallFilmCard title="Bohemian Rhapsody" imageSrc="img/bohemian-rhapsody.jpg" />
            <SmallFilmCard title="Macbeth" imageSrc="img/macbeth.jpg" />
            <SmallFilmCard title="Aviator" imageSrc="img/aviator.jpg" />
            <SmallFilmCard title="We need to talk about Kevin" imageSrc="img/we-need-to-talk-about-kevin.jpg" />
            <SmallFilmCard title="What We Do in the Shadows" imageSrc="img/what-we-do-in-the-shadows.jpg" />
            <SmallFilmCard title="Revenant" imageSrc="img/revenant.jpg" />
            <SmallFilmCard title="Johnny English" imageSrc="img/johnny-english.jpg" />
            <SmallFilmCard title="Shutter Island" imageSrc="img/shutter-island.jpg" />
            <SmallFilmCard title="Pulp Fiction" imageSrc="img/pulp-fiction.jpg" />
            <SmallFilmCard title="No Country for Old Men" imageSrc="img/no-country-for-old-men.jpg" />
            <SmallFilmCard title="Snatch" imageSrc="img/snatch.jpg" />
            <SmallFilmCard title="Moonrise Kingdom" imageSrc="img/moonrise-kingdom.jpg" />
            <SmallFilmCard title="Seven Years in Tibet" imageSrc="img/seven-years-in-tibet.jpg" />
            <SmallFilmCard title="Midnight Special" imageSrc="img/midnight-special.jpg" />
            <SmallFilmCard title="War of the Worlds" imageSrc="img/war-of-the-worlds.jpg" />
            <SmallFilmCard title="Dardjeeling Limited" imageSrc="img/dardjeeling-limited.jpg" />
            <SmallFilmCard title="Orlando" imageSrc="img/orlando.jpg" />
            <SmallFilmCard title="Mindhunter" imageSrc="img/mindhunter.jpg" />
            <SmallFilmCard title="Midnight Special" imageSrc="img/midnight-special.jpg" />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MainScreen;
