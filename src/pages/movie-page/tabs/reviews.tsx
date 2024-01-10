import { FilmReview } from '../../../types/reviews';
import { useAppSelector } from '../../../hooks/redux-hooks';

const SingleReview = ({review}: {review : FilmReview}): JSX.Element => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{review.comment}</p>

      <footer className="review__details">
        <cite className="review__author">{review.user}</cite>
        <time className="review__date" dateTime="2016-12-24">{new Date(review.date).toDateString()}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{review.rating}</div>
  </div>
);

export function Reviews(): JSX.Element {
  const filmReviews = useAppSelector((state) => state.chosenFilmReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {filmReviews.map((review) => <SingleReview key={review.id} review={review}/>)}
      </div>
    </div>
  );
}
