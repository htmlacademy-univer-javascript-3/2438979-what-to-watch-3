import { MainPage } from '../../pages/main-page/main-page';
import { SignInPage } from '../../pages/sign-in-page/sign-in-page';
import { AddReviewPage } from '../../pages/add-review-page/add-review-page';
import { MyListPage } from '../../pages/my-list-page/my-list-page';
import { MoviePage } from '../../pages/movie-page/movie-page';
import { PlayerPage } from '../../pages/player-page/player-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants/enum-constants/app-route';
import { PrivateRoute } from '../private-route/private-route';
import { AuthorizationStatus } from '../../constants/enum-constants/authorization-status';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { checkAuthorization, fetchFilms, fetchPromoFilm } from '../../store/api-actions';
import { LoadingScreen } from '../loading-screen/loading-screen';

export function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthorization());
    dispatch(fetchPromoFilm());
    dispatch(fetchFilms());
  }, [dispatch]);

  const isFilmsLoading = useAppSelector((state) => state.isFilmsLoading);
  const isPromoFilmLoading = useAppSelector((state) => state.isPromoFilmLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsLoading || isPromoFilmLoading) {
    return <LoadingScreen/>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReviewPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListPage/>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
