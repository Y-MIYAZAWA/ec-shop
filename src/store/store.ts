import { Action, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { adminLoginSlice } from './adminLoginSlice';
import { ThunkAction, configureStore } from '@reduxjs/toolkit';
import { adminUserSlice } from './adminUserSlice';

const rootReducers = combineReducers({
  adminLogin: adminLoginSlice.reducer,
  adminUser: adminUserSlice.reducer,
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
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
