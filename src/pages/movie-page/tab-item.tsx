import cn from 'classnames';
import { Dispatch, SetStateAction } from 'react';

export enum MoviePageTab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

type TabItemProps = {
  tabType: MoviePageTab;
  isChoosen: boolean;
  onClick: Dispatch<SetStateAction<MoviePageTab>>;
}

export function TabItem({tabType, isChoosen, onClick}: TabItemProps): JSX.Element {
  return (
    <li
      className={cn('film-nav__item', {' film-nav__item--active' : isChoosen})}
      style={{cursor: 'pointer'}}
    >
      <div onClick={() => onClick(tabType)} className="film-nav__link">{tabType}</div>
    </li>
  );
}
