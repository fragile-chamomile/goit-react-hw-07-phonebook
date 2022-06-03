import { configureStore } from '@reduxjs/toolkit';
import { filterSliceReducer } from './slice';
import { contactsApi } from '../services/contacts-api';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSliceReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
