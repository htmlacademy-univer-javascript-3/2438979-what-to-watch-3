import { useEffect, useRef } from 'react';

export type CardVideoPlayerProps = {
  posterSource: string;
  videoSource: string;
  muted: boolean;
  isPlaying: boolean;
}

export function CardVideoPlayer({videoSource, posterSource, muted, isPlaying}: CardVideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <div className="small-film-card__image">
      <video
        className='player__video'
        ref={videoRef}
        loop
        src={videoSource}
        poster={posterSource}
        muted={muted}
        width="280"
        height="175"
      />
    </div>
  );
}
