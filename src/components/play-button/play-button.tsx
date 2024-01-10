import { useNavigate } from 'react-router-dom';

export type PlayButtonProps = {
  filmId: string;
}

export function PlayButton({filmId}: PlayButtonProps): JSX.Element {
  const navigate = useNavigate();

  const onClick = () => navigate(`/player/${filmId}`);

  return (
    <button className="btn btn--play film-card__button" type="button" onClick={onClick}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}
