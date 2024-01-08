import { Reviews } from './tabs/reviews';
import { Details } from './tabs/details';
import { Overview } from './tabs/overview';
import { MoviePageTab, TabItem } from './tab-item';
import { useState } from 'react';

export function Tabs(): JSX.Element {
  const [moviePageTab, setMoviePageTab] = useState(MoviePageTab.Overview);

  const getComponentByType = (type: MoviePageTab) => {
    switch (type) {
      case MoviePageTab.Overview:
        return <Overview/>;
      case MoviePageTab.Details:
        return <Details/>;
      case MoviePageTab.Reviews:
        return <Reviews/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(MoviePageTab).map(
            (movieTab: MoviePageTab) => <TabItem key={movieTab} tabType={movieTab} isChoosen={moviePageTab === movieTab} onClick={setMoviePageTab}/>)}
        </ul>
      </nav>
      {getComponentByType(moviePageTab)}
    </div>
  );
}
