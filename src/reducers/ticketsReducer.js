import {
  GET_TICKETS,
  CLEAR_TICKETS,
  ADD_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
  CURRENT_TICKET,
  CLEAR_CURRENT_TICKET,
  TICKET_ERROR,
  CLEAR_TICKET_ERROR,
  SET_ONSCREEN_TICKETS,
  CLEAR_ONSCREEN_TICKETS,
} from "../actions/types";

const initialState = {
  records: null,
  onscrrecords: [],
  current: null,
  loading: true,
  message: "",
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        records: action.payload,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_TICKETS:
      return {
        ...state,
        records: null,
        onscrrecords: [],
        message: "",
        error: null,
      };
    case SET_ONSCREEN_TICKETS:
      return {
        ...state,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_ONSCREEN_TICKETS:
      return {
        ...state,
        onscrrecords: [],
      };
    case CURRENT_TICKET:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_TICKET:
      return {
        ...state,
        current: null,
      };
    case ADD_TICKET:
      return {
        ...state,
        records: [action.payload, ...state.records],
        onscrrecords: [action.payload, ...state.onscrrecords],
        message: "Record Added.",
        loading: false,
      };
    case UPDATE_TICKET:
      return {
        ...state,
        records: state.records.map((obj) =>
          obj.ticket_ID === action.payload.ticket_ID ? action.payload : obj
        ),
        onscrrecords: state.onscrrecords.map((obj) =>
          obj.ticket_ID === action.payload.ticket_ID ? action.payload : obj
        ),
        message: "Record Updated.",
        loading: false,
      };
    case DELETE_TICKET:
      const filteredrecords = state.records.filter(
        (obj) => obj.ticket_ID !== action.payload
      );
      return {
        ...state,
        records: filteredrecords,
        onscrrecords: filteredrecords,
        message: "Record Deleted.",
        loading: false,
      };
    case TICKET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_TICKET_ERROR:
      return {
        ...state,
        error: null,
        message: "",
      };
    default:
      return state;
  }
};
