import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { films } from './mocks/films';
import { videoSource } from './mocks/video-source';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AUTO_CLOSE_TOAST_WARN_DELAY_IN_MS } from './constants/constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position='top-right'
        autoClose={AUTO_CLOSE_TOAST_WARN_DELAY_IN_MS}
        hideProgressBar
        closeOnClick
        pauseOnHover
        theme={'light'}
      />
      <App films={films} videoSource={videoSource}/>
    </Provider>
  </React.StrictMode>
);
