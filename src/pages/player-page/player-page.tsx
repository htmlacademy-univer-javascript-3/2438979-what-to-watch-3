import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchFilmDetails } from '../../store/api-actions';
import { LoadingScreen } from '../../components/loading-screen/loading-screen';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { useNavigate } from 'react-router-dom';
import { PlayButtonBody } from './play-button-body';
import { PauseButtonBody } from './pause-button-body';

export function PlayerPage(): JSX.Element {
  const {id} = useParams();
  const filmDetails = useAppSelector((state) => state.chosenFilm);
  const isFilmDetailsLoading = useAppSelector((state) => state.isFilmDetailsLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [playerState, setPlayerState] = useState({
    timeLeft: 0,
    isPaused: true,
    progress: 0,
    isFullScreen: false,
  });

  const getTimeString = () => {
    let secondsCount = playerState.timeLeft;
    const hoursCount = Math.floor(secondsCount / 3600);
    secondsCount %= 3600;
    const minutesCount = Math.floor(secondsCount / 60);
    secondsCount %= 60;
    const timesList = hoursCount > 0 ? [hoursCount, minutesCount, secondsCount] : [minutesCount, secondsCount];
    return `-${timesList.map((number) => number >= 10 ? number.toString() : `0${number}`).join(':')}`;
  };

  const onTimeUpdate = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      const currentTime = videoRef.current.currentTime;
      setPlayerState({
        ...playerState,
        timeLeft: Math.floor(duration - currentTime),
        progress: currentTime / duration * 100,
      });
    }
  };

  const onPlayerClick = () => {
    if (videoRef.current) {
      if (playerState.isPaused) {
        videoRef.current.play();
      } else{
        videoRef.current.pause();
      }
      setPlayerState({
        ...playerState,
        isPaused: !playerState.isPaused,
      });
    }
  };

  const onFullScreenButtonClick = () => {
    if (videoRef.current) {
      if (playerState.isFullScreen) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
      setPlayerState({
        ...playerState,
        isFullScreen: !playerState.isFullScreen,
      });
    }
  };

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
    <div className="player">
      <video className="player__video"
        ref={videoRef}
        src={filmDetails.videoLink}
        poster={filmDetails.posterImage}
        onTimeUpdate={onTimeUpdate}
      >
      </video>

      <button onClick={() => navigate(`/films/${filmDetails.id}`)} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={playerState.progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${playerState.progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getTimeString()}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={onPlayerClick} type="button" className="player__play">
            {playerState.isPaused ? <PlayButtonBody/> : <PauseButtonBody/>}
          </button>
          <div className="player__name">Transpotting</div>

          <button onClick={onFullScreenButtonClick} type="button" className="player__full-screen" >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
