import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';
import { FilmList } from '../../components/film-list/film-list';
import { UserBlock } from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useEffect } from 'react';
import { fetchFavoriteFilms } from '../../store/api-actions';

export function MyListPage(): JSX.Element {
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}
