import { ALL_GENRES } from '../../constants/constants';
import { GenreItem } from './genre-item';
import { useAppSelector } from '../../hooks/redux-hooks';

export function GenresList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const existingGenres = new Set(films.map((film) => film.genre));
  const genresList = [ALL_GENRES, ...existingGenres];
  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre: string) => <GenreItem key={genre} genre={genre}/>)}
    </ul>
  );
}
