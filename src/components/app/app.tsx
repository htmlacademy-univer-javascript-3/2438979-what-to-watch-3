import { MainPage } from '../../pages/main-page/main-page';
import { MainPageProps } from '../../pages/main-page/main-page';

export function App({promoFilm}: MainPageProps): JSX.Element {
  return (
    <MainPage promoFilm={promoFilm}/>
  );
}
