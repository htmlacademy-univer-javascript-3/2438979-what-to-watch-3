export type FilmReview = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type FilmReviewRequest = {
  filmId: string;
  comment: string;
  rating: number;
}
