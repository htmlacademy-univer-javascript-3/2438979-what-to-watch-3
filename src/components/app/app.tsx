import { MainPage } from '../../pages/main-page/main-page';
import { MainPageProps } from '../../pages/main-page/main-page';
import { SignInPage } from '../../pages/sign-in-page/sign-in-page';
import { AddReviewPage } from '../../pages/add-review-page/add-review-page';
import { MyListPage } from '../../pages/my-list-page/my-list-page';
import { MoviePage } from '../../pages/movie-page/movie-page';
import { PlayerPage } from '../../pages/player-page/player-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { PrivateRoute } from '../private-route/private-route';
import { AuthorizationStatus } from '../../constants/authorization-status';

export function App({promoFilm}: MainPageProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage promoFilm={promoFilm}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewPage />}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
