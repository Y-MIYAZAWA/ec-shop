import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { adminLoginSlice } from './slice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducers = combineReducers({
  adminLogin: adminLoginSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const parsistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: parsistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})