import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact(state, action) {
      //   return state + action.payload;
      state.items.push(action.payload);
    },

    deleteContact(state, action) {
      //   const index = state.findIndex(task => task.id === action.payload);
      //   state.splice(index, 1);
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // filteredContacts(state, action) {
    //   const filter = action.payload;
    //   const standarValue = filter.toLowerCase();
    //   return state.filter(contact =>
    //     contact.name.toLowerCase().includes(standarValue)
    //   );
    // },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  //   whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
