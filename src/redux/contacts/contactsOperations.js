// import * as contactsAPI from 'services/contacts-api';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const contacts = await contactsAPI.fetchContacts();
//   return contacts;
// });

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async id => {
//     const data = await contactsAPI.deleteContact(id);
//     return data;
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async contact => {
//     const data = await contactsAPI.addContact(contact);
//     return data;
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
