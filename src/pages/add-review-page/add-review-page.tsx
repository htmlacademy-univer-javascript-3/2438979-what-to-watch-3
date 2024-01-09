import { LogoLink } from '../../components/logos/logo-link';
import { ReviewForm } from './review-form';
import { Link } from 'react-router-dom';
import { UserBlock } from '../../components/user-block/user-block';

export type AddReviewPageProps = {
  id: number;
  title: string;
  imageSource: string;
  posterSource: string;
}

export function AddReviewPage({id, title, imageSource, posterSource}: AddReviewPageProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={imageSource} alt={title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <LogoLink />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">
                  {title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={posterSource} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>
      <ReviewForm/>
    </section>
  );
}
