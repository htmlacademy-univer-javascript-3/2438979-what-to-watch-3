import React from 'react';

export type RatingStarProps = {
  index: number;
  setRating: (index: number) => void;
}

export function RatingStar({index, setRating}: RatingStarProps): JSX.Element {
  return (
    <React.Fragment>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating" defaultValue={`${index}`} onClick={() => setRating(index)} />
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </React.Fragment>
  );
}
