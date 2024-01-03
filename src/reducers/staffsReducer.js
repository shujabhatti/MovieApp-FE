import {
  GET_STAFFS,
  CLEAR_STAFFS,
  ADD_STAFF,
  UPDATE_STAFF,
  DELETE_STAFF,
  CURRENT_STAFF,
  CLEAR_CURRENT_STAFF,
  STAFF_ERROR,
  CLEAR_STAFF_ERROR,
  SET_ONSCREEN_STAFFS,
  CLEAR_ONSCREEN_STAFFS,
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
    case GET_STAFFS:
      return {
        ...state,
        records: action.payload,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_STAFFS:
      return {
        ...state,
        records: null,
        onscrrecords: [],
        message: "",
        error: null,
      };
    case SET_ONSCREEN_STAFFS:
      return {
        ...state,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_ONSCREEN_STAFFS:
      return {
        ...state,
        onscrrecords: [],
      };
    case CURRENT_STAFF:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_STAFF:
      return {
        ...state,
        current: null,
      };
    case ADD_STAFF:
      return {
        ...state,
        records: [action.payload, ...state.records],
        onscrrecords: [action.payload, ...state.onscrrecords],
        message: "Record Added.",
        loading: false,
      };
    case UPDATE_STAFF:
      return {
        ...state,
        records: state.records.map((obj) =>
          obj.staff_ID === action.payload.staff_ID ? action.payload : obj
        ),
        onscrrecords: state.onscrrecords.map((obj) =>
          obj.staff_ID === action.payload.staff_ID ? action.payload : obj
        ),
        message: "Record Updated.",
        loading: false,
      };
    case DELETE_STAFF:
      const filteredrecords = state.records.filter(
        (obj) => obj.staff_ID !== action.payload
      );
      return {
        ...state,
        records: filteredrecords,
        onscrrecords: filteredrecords,
        message: "Record Deleted.",
        loading: false,
      };
    case STAFF_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_STAFF_ERROR:
      return {
        ...state,
        error: null,
        message: "",
      };
    default:
      return state;
  }
};
