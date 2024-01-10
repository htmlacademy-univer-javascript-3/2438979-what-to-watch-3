import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';
import { Film } from '../../types/films';
import { FilmList } from '../../components/film-list/film-list';
import { UserBlock } from '../../components/user-block/user-block';

export type MyListPageProps = {
  films: Film[];
}

export function MyListPage({films}: MyListPageProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={films} />
      </section>

      <Footer />
    </div>
  );
}
