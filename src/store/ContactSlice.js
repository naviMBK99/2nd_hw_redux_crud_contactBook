import { createSlice } from "@reduxjs/toolkit";

export const ContactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: JSON.parse(localStorage.getItem("contacts")) || [],
    selectedContact: null,
  },
  reducers: {
    addContact: (state, action) => {
      const { contactName, contactLastName, contactPhone, contactImg } =
        action.payload;
      state.contacts.push({
        contactName,
        contactLastName,
        contactPhone,
        contactImg,
        id: Date.now(),
      });
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (elem) => elem.id !== action.payload.id
      );
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    editContact(state, action) {
      const {
        id,
        newContactName,
        newContactLastName,
        newContactPhone,
        newContactImg,
      } = action.payload;
      const editedContact = state.contacts.find((elem) => elem.id === id);
      editedContact.contactName = newContactName;
      editedContact.contactLastName = newContactLastName;
      editedContact.contactPhone = newContactPhone;
      editedContact.contactImg = newContactImg;
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
  },
});
export const { addContact, deleteContact, editContact, getOneContact } =
  ContactSlice.actions;
export default ContactSlice.reducer;
