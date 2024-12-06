import { configureStore } from '@reduxjs/toolkit';

import favouritesReducer from './slice';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

export default store;
