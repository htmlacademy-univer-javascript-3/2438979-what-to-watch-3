import cn from 'classnames';
import { Link } from 'react-router-dom';
import { GenreType } from '../../constants/genre-type';
import { useAppSelector, useAppDispatch } from '../../hooks/redux-hooks';
import { changeGenre } from '../../store/action';

type GenreItemProps = {
  genre: GenreType;
}

export function GenreItem({genre}: GenreItemProps): JSX.Element {
  const chosenGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();
  return (
    <li className={cn(
      'catalog__genres-item',
      {'catalog__genres-item--active' : chosenGenre === genre})}
    >
      <Link to="#" className="catalog__genres-link" onClick={() => dispatch(changeGenre(genre))}>{genre}</Link>
    </li>
  );
}
