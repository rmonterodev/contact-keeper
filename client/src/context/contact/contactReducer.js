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

const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        contacts: action.payload,
      };
    case SET_ALERT:
      return {
        ...state,
        contacts: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
