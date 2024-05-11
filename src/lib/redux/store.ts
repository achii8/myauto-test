import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import manufactorersSlice from './slices/manufactorersSlice';
import categoriesSlice from './slices/categoriesSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  manufactorer: manufactorersSlice,
  categories: categoriesSlice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
export type AppDispatch = typeof store.dispatch;
