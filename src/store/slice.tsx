import { createSlice } from '@reduxjs/toolkit';

import { setLocalStorage } from '../utils/localStorage';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favoriteIds: [],
    people: [],
  },
  reducers: {
    addPerson(state, action) {
      const id = action.payload;
      if (!state.favoriteIds.includes(id)) {
        state.favoriteIds.push(id);
        setLocalStorage('favouritePeople', state.favoriteIds);
      }
    },
    removePerson(state, action) {
      const id = action.payload;
      state.favoriteIds = state.favoriteIds.filter(
        (personId) => personId !== id
      );
      setLocalStorage('favouritePeople', state.favoriteIds);
    },
    setPeople(state, action) {
      state.people = action.payload;
    },
    setFavourites(state, action) {
      state.favoriteIds = action.payload;
      setLocalStorage('favouritePeople', state.favoriteIds);
    },
  },
});

export const { setPeople, addPerson, removePerson, setFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
