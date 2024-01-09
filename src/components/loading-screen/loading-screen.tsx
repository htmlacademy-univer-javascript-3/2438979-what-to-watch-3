import { Logo } from '../logos/logo';
import { Footer } from '../footers/footer';

export function LoadingScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
      </header>
      <div className="user-page__content" style={{textAlign: 'center'}}>
        <p>Loading...</p>
      </div>
      <Footer/>
    </div>
  );
}
