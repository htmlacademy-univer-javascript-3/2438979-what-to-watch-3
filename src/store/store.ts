import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer.ts';
import { getAPIClient } from '../services/api.ts';

export const api = getAPIClient();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
