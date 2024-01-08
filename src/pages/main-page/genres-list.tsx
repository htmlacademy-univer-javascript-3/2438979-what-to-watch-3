import { GenreType } from '../../constants/genre-type';
import { GenreItem } from './genre-item';

export function GenresList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {Object.values(GenreType).map((genreType: GenreType) => <GenreItem key={genreType} genre={genreType}/>)}
    </ul>
  );
}
