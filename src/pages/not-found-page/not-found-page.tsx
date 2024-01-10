import { Link } from 'react-router-dom';
import { Logo } from '../../components/logo/logo';

export function NotFoundPage() {
  return (
    <section className="not-found" style={{textAlign: 'center'}}>
      <header className="page-header film-card__head">
        <Logo />
      </header>
      <h1>404. Page not found</h1>
      <Link to="/">Перейти на главную</Link>
    </section>
  );
}
