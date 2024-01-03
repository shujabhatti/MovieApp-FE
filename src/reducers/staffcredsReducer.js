import {
  GET_STAFF_CREDS,
  CLEAR_STAFF_CREDS,
  ADD_STAFF_CRED,
  UPDATE_STAFF_CRED,
  DELETE_STAFF_CRED,
  CURRENT_STAFF_CRED,
  CLEAR_CURRENT_STAFF_CRED,
  STAFF_CRED_ERROR,
  CLEAR_STAFF_CRED_ERROR,
  SET_ONSCREEN_STAFF_CREDS,
  CLEAR_ONSCREEN_STAFF_CREDS,
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
    case GET_STAFF_CREDS:
      return {
        ...state,
        records: action.payload,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_STAFF_CREDS:
      return {
        ...state,
        records: null,
        onscrrecords: [],
        message: "",
        error: null,
      };
    case SET_ONSCREEN_STAFF_CREDS:
      return {
        ...state,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_ONSCREEN_STAFF_CREDS:
      return {
        ...state,
        onscrrecords: [],
      };
    case CURRENT_STAFF_CRED:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_STAFF_CRED:
      return {
        ...state,
        current: null,
      };
    case ADD_STAFF_CRED:
      return {
        ...state,
        records: [action.payload, ...state.records],
        onscrrecords: [action.payload, ...state.onscrrecords],
        message: "Record Added.",
        loading: false,
      };
    case UPDATE_STAFF_CRED:
      return {
        ...state,
        records: state.records.map((obj) =>
          obj.staffcred_ID === action.payload.staffcred_ID ? action.payload : obj
        ),
        onscrrecords: state.onscrrecords.map((obj) =>
          obj.staffcred_ID === action.payload.staffcred_ID ? action.payload : obj
        ),
        message: "Record Updated.",
        loading: false,
      };
    case DELETE_STAFF_CRED:
      const filteredrecords = state.records.filter(
        (obj) => obj.staffcred_ID !== action.payload
      );
      return {
        ...state,
        records: filteredrecords,
        onscrrecords: filteredrecords,
        message: "Record Deleted.",
        loading: false,
      };
    case STAFF_CRED_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_STAFF_CRED_ERROR:
      return {
        ...state,
        error: null,
        message: "",
      };
    default:
      return state;
  }
};
