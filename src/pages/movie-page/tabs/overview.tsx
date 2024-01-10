import React from 'react';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { ScoreName } from '../../../constants/enum-constants/score-name';
import { ScoreUpperBound } from '../../../constants/enum-constants/score-upper-bound';

export function Overview(): JSX.Element {
  const filmDetails = useAppSelector((state) => state.chosenFilm);

  const getScoreByRating = (rating: number): string => {
    if (rating < ScoreUpperBound.Bad) {
      return ScoreName.Bad;
    }
    if (rating < ScoreUpperBound.Normal) {
      return ScoreName.Normal;
    }
    if (rating < ScoreUpperBound.Good) {
      return ScoreName.Good;
    }
    if (rating < ScoreUpperBound.VeryGood) {
      return ScoreName.VeryGood;
    }
    return ScoreName.Awesome;
  };

  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{filmDetails?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getScoreByRating(filmDetails?.rating as number)}</span>
          <span className="film-rating__count">{filmDetails?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{filmDetails?.description}</p>

        <p className="film-card__director"><strong>Director: {filmDetails?.director as string}</strong></p>

        <p className="film-card__starring"><strong>Starring: {filmDetails?.starring.join(', ') as string} and other</strong></p>
      </div>
    </React.Fragment>
  );
}
