import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: "professional",
        name: "Sara Smith",
        email: "ssmith@gmail.com",
        phone: "111-111-1111",
        id: "612db492de9fab57cccd31dd",
      },
      {
        type: "personal",
        name: "Jose Tijerino",
        email: "jptijerino@gmail.com",
        phone: "2222-2222",
        id: "612db4ebde9fab57cccd31e0",
      },
      {
        type: "personal",
        name: "Mely Williams",
        email: "missy20@gmail.com",
        phone: "777-777-774",
        id: "612db568de9fab57cccd31e8",
      },
      {
        type: "professional",
        name: "Will Smith",
        email: "wsmith@gmail.com",
        phone: "111-111-1111",
        id: "612e7892fdf64f0b8761ec73",
      },
    ],
    current: null,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  const clearCurrent = (contact) => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        current: state.current,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
