import { Film } from '../../types/types';
import { Link } from 'react-router-dom';

type SmallFilmCardProps = {
  film: Film;
  setActiveCardId: React.Dispatch<React.SetStateAction<number>>;
}

export function SmallFilmCard({film, setActiveCardId}: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => setActiveCardId(film.id)}>
      <div className="small-film-card__image">
        <img src={film.imageSource} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.title}</Link>
      </h3>
    </article>
  );
}
