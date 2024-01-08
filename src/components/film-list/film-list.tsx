import { SmallFilmCard } from '../small-film-card/small-film-card';
import { Film } from '../../types/types';
import { useState } from 'react';

type FilmListProps = {
  films: Film[];
}

export function FilmList({films}: FilmListProps): JSX.Element {
  const [, setActiveCardId] = useState(0);
  return (
    <div className="catalog__films-list">
      {films.map((film) => <SmallFilmCard key={film.id} film={film} setActiveCardId={setActiveCardId}/>)}
    </div>
  );
}
