import { useState } from 'react';
import { RatingStar } from './rating-star';

export function ReviewForm(): JSX.Element {
  const [, setRating] = useState(0);
  const [, setText] = useState('');
  const ratings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] as const;
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratings.map((index) => <RatingStar key={index} index={index} setRating={setRating}/>)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            defaultValue={''}
            onChange={(evt) => setText(evt.target.value)}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}
