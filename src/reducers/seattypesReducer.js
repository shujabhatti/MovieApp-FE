import {
  GET_SEAT_TYPES,
  CLEAR_SEAT_TYPES,
  ADD_SEAT_TYPE,
  UPDATE_SEAT_TYPE,
  DELETE_SEAT_TYPE,
  CURRENT_SEAT_TYPE,
  CLEAR_CURRENT_SEAT_TYPE,
  SEAT_TYPE_ERROR,
  CLEAR_SEAT_TYPE_ERROR,
  SET_ONSCREEN_SEAT_TYPES,
  CLEAR_ONSCREEN_SEAT_TYPES,
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
    case GET_SEAT_TYPES:
      return {
        ...state,
        records: action.payload,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_SEAT_TYPES:
      return {
        ...state,
        records: null,
        onscrrecords: [],
        message: "",
        error: null,
      };
    case SET_ONSCREEN_SEAT_TYPES:
      return {
        ...state,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_ONSCREEN_SEAT_TYPES:
      return {
        ...state,
        onscrrecords: [],
      };
    case CURRENT_SEAT_TYPE:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_SEAT_TYPE:
      return {
        ...state,
        current: null,
      };
    case ADD_SEAT_TYPE:
      return {
        ...state,
        records: [action.payload, ...state.records],
        onscrrecords: [action.payload, ...state.onscrrecords],
        message: "Record Added.",
        loading: false,
      };
    case UPDATE_SEAT_TYPE:
      return {
        ...state,
        records: state.records.map((obj) =>
          obj.type_ID === action.payload.type_ID ? action.payload : obj
        ),
        onscrrecords: state.onscrrecords.map((obj) =>
          obj.type_ID === action.payload.type_ID ? action.payload : obj
        ),
        message: "Record Updated.",
        loading: false,
      };
    case DELETE_SEAT_TYPE:
      const filteredrecords = state.records.filter(
        (obj) => obj.type_ID !== action.payload
      );
      return {
        ...state,
        records: filteredrecords,
        onscrrecords: filteredrecords,
        message: "Record Deleted.",
        loading: false,
      };
    case SEAT_TYPE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_SEAT_TYPE_ERROR:
      return {
        ...state,
        error: null,
        message: "",
      };
    default:
      return state;
  }
};
