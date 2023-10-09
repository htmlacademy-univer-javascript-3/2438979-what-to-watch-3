import MainScreen from '../../pages/main-screen/main-screen';
import { Film } from '../../types/types';

type AppProps = {
    promoFilm: Film;
}

function App({promoFilm}: AppProps): JSX.Element {
  return (
    <MainScreen promoFilm={promoFilm}/>
  );
}

export default App;
