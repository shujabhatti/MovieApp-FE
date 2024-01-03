import {
  GET_SEATS,
  CLEAR_SEATS,
  ADD_SEAT,
  UPDATE_SEAT,
  DELETE_SEAT,
  CURRENT_SEAT,
  CLEAR_CURRENT_SEAT,
  SEAT_ERROR,
  CLEAR_SEAT_ERROR,
  SET_ONSCREEN_SEATS,
  CLEAR_ONSCREEN_SEATS,
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
    case GET_SEATS:
      return {
        ...state,
        records: action.payload,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_SEATS:
      return {
        ...state,
        records: null,
        onscrrecords: [],
        message: "",
        error: null,
      };
    case SET_ONSCREEN_SEATS:
      return {
        ...state,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_ONSCREEN_SEATS:
      return {
        ...state,
        onscrrecords: [],
      };
    case CURRENT_SEAT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_SEAT:
      return {
        ...state,
        current: null,
      };
    case ADD_SEAT:
      return {
        ...state,
        records: [action.payload, ...state.records],
        onscrrecords: [action.payload, ...state.onscrrecords],
        message: "Record Added.",
        loading: false,
      };
    case UPDATE_SEAT:
      return {
        ...state,
        records: state.records.map((obj) =>
          obj.seat_ID === action.payload.seat_ID ? action.payload : obj
        ),
        onscrrecords: state.onscrrecords.map((obj) =>
          obj.seat_ID === action.payload.seat_ID ? action.payload : obj
        ),
        message: "Record Updated.",
        loading: false,
      };
    case DELETE_SEAT:
      const filteredrecords = state.records.filter(
        (obj) => obj.seat_ID !== action.payload
      );
      return {
        ...state,
        records: filteredrecords,
        onscrrecords: filteredrecords,
        message: "Record Deleted.",
        loading: false,
      };
    case SEAT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_SEAT_ERROR:
      return {
        ...state,
        error: null,
        message: "",
      };
    default:
      return state;
  }
};
