import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { promoFilm } from './mocks/promo-film';
import { films } from './mocks/films';
import { videoSource } from './mocks/video-source';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoFilm={promoFilm} films={films} videoSource={videoSource}/>
    </Provider>
  </React.StrictMode>
);
