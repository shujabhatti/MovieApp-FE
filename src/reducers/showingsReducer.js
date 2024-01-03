import {
  GET_SHOWINGS,
  CLEAR_SHOWINGS,
  ADD_SHOWING,
  UPDATE_SHOWING,
  DELETE_SHOWING,
  CURRENT_SHOWING,
  CLEAR_CURRENT_SHOWING,
  SHOWING_ERROR,
  CLEAR_SHOWING_ERROR,
  SET_ONSCREEN_SHOWINGS,
  CLEAR_ONSCREEN_SHOWINGS,
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
    case GET_SHOWINGS:
      return {
        ...state,
        records: action.payload,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_SHOWINGS:
      return {
        ...state,
        records: null,
        onscrrecords: [],
        message: "",
        error: null,
      };
    case SET_ONSCREEN_SHOWINGS:
      return {
        ...state,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_ONSCREEN_SHOWINGS:
      return {
        ...state,
        onscrrecords: [],
      };
    case CURRENT_SHOWING:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_SHOWING:
      return {
        ...state,
        current: null,
      };
    case ADD_SHOWING:
      return {
        ...state,
        records: [action.payload, ...state.records],
        onscrrecords: [action.payload, ...state.onscrrecords],
        message: "Record Added.",
        loading: false,
      };
    case UPDATE_SHOWING:
      return {
        ...state,
        records: state.records.map((obj) =>
          obj.showing_ID === action.payload.showing_ID ? action.payload : obj
        ),
        onscrrecords: state.onscrrecords.map((obj) =>
          obj.showing_ID === action.payload.showing_ID ? action.payload : obj
        ),
        message: "Record Updated.",
        loading: false,
      };
    case DELETE_SHOWING:
      const filteredrecords = state.records.filter(
        (obj) => obj.showing_ID !== action.payload
      );
      return {
        ...state,
        records: filteredrecords,
        onscrrecords: filteredrecords,
        message: "Record Deleted.",
        loading: false,
      };
    case SHOWING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_SHOWING_ERROR:
      return {
        ...state,
        error: null,
        message: "",
      };
    default:
      return state;
  }
};
