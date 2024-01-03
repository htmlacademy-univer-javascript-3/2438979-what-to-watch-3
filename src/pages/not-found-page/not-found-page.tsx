import { Link } from 'react-router-dom';
import { LogoLink } from '../../components/logos/logo-link';

export function NotFoundPage() {
  return (
    <section className="not-found">
      <header className="page-header film-card__head">
        <LogoLink />
      </header>
      <h1>404. Page not found</h1>
      <Link to="/">Перейти на главную</Link>
    </section>
  );
}
