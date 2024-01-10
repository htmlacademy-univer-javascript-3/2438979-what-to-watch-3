import { FormEvent, useState } from 'react';
import { RatingStar } from './rating-star';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { createFilmReview } from '../../store/api-actions';
import { ERROR_RESPONSE_FIELD } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

export type ReviewFormProps = {
  filmId: string;
}

export function ReviewForm({filmId}: ReviewFormProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const ratings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] as const;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(createFilmReview({
      filmId: filmId,
      comment: text,
      rating: rating,
    })).then((response) => {
      if (!(ERROR_RESPONSE_FIELD in response)) {
        navigate(`/films/${filmId}`);
      }
    });
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onSubmit}>
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
            <button className="add-review__btn" type="submit" disabled={text.length < 50 || text.length > 400 || !rating}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}
