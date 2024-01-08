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
import { PlayButton } from '../../pages/player-page/play-button-component';


export type AppProps = MainPageProps & {
  videoSource: string;
}

export function App({promoFilm, films, videoSource}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              promoFilm={promoFilm}
              films={films}
            />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <AddReviewPage
              id={1}
              title={promoFilm.title}
              imageSource={promoFilm.imageSource}
              posterSource={promoFilm.posterSource}
            />
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage film={films[0]} similarFilms={films.slice(0, 4)}/>}
        />
        <Route
          path={AppRoute.Player}
          element={
            <PlayerPage videoSource={videoSource}>
              <PlayButton/>
            </PlayerPage>
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListPage films={films}/>
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
