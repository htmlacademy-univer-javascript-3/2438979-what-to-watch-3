import { Logo } from '../../components/logo/logo';
import { ReviewForm } from './review-form';
import { Link } from 'react-router-dom';
import { UserBlock } from '../../components/user-block/user-block';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useEffect } from 'react';
import { fetchFilmDetails } from '../../store/api-actions';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { NotFoundPage } from '../not-found-page/not-found-page';

export function AddReviewPage(): JSX.Element {
  const {id} = useParams();
  const filmDetails = useAppSelector((state) => state.chosenFilm);
  const isFilmDetailsLoading = useAppSelector((state) => state.isFilmDetailsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id === undefined) {
      return;
    }
    dispatch(fetchFilmDetails(id));
  }, [dispatch, id]);

  if (isFilmDetailsLoading) {
    return <LoadingScreen/>;
  }
  if (!filmDetails) {
    return <NotFoundPage/>;
  }
  return (
    <section className="film-card film-card--full" style={{background: filmDetails.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmDetails.backgroundImage} alt={filmDetails.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${filmDetails.id}`} className="breadcrumbs__link">
                  {filmDetails.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={'#'} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={filmDetails.posterImage} alt={`${filmDetails.name} poster`} width="218" height="327" />
        </div>
      </div>
      <ReviewForm filmId={filmDetails.id}/>
    </section>
  );
}
