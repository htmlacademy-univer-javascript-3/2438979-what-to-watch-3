import { Film } from '../../types/films';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CardVideoPlayer } from './card-video-player';
import { PREVIEW_VIDEO_DELAY_IN_MS } from '../../constants/constants';

type SmallFilmCardProps = {
  film: Film;
  setActiveCardId: React.Dispatch<React.SetStateAction<number>>;
}

export function SmallFilmCard({film, setActiveCardId}: SmallFilmCardProps): JSX.Element {
  const [isMouseOverCard, setIsMouseOverCard] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (isMouseOverCard) {
      setTimeout(() => isMounted && setIsVideoPlaying(true), PREVIEW_VIDEO_DELAY_IN_MS);
    }

    return () => {
      isMounted = false;
    };
  }, [isMouseOverCard]);

  const onMouseEnter = () => {
    setActiveCardId(film.id);
    setIsMouseOverCard(true);
  };

  const onMouseLeave = () => {
    setIsMouseOverCard(false);
    setIsVideoPlaying(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{cursor: 'pointer'}}
    >
      <Link to={`/films/${film.id}`}>
        <CardVideoPlayer
          muted
          videoSource={film.previewVideoLink}
          posterSource={film.previewImage}
          isPlaying={isVideoPlaying}
        />
      </Link>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}
