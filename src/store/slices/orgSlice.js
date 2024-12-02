import { createSlice } from "@reduxjs/toolkit";

const orgSlice = createSlice({
  name: 'org',
  initialState: {
    leaserName: '',
    leaserEmail: '',
    registrationNumber: '',
    mailAddress1: '',
    mailAddress2: '',
    city: '',
    state: '',
    zipcode: '',
    documents: '',
  },
  reducers: {
    setLeaserName: (state, action) => {
      state.leaserName = action.payload;
    },
    setLeaserEmail: (state, action) => {
      state.leaserEmail = action.payload;
    },
    setRegistrationNumber: (state, action) => {
      state.registrationNumber = action.payload;
    },
    setMailAddress1: (state, action) => {
      state.mailAddress1 = action.payload;
    },
    setMailAddress2: (state, action) => {
      state.mailAddress2 = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    setZipcode: (state, action) => {
      state.zipcode = action.payload;
    },
    setDocuments: (state, action) => {
      state.documents = action.payload;
    },
  },
});

export const {
  setLeaserName,
  setLeaserEmail,
  setRegistrationNumber,
  setMailAddress1,
  setMailAddress2,
  setCity,
  setState,
  setZipcode,
  setDocuments,
} = orgSlice.actions;

export default orgSlice.reducer;
