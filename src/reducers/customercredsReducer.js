import {
  GET_CUSTOMER_CREDS,
  CLEAR_CUSTOMER_CREDS,
  ADD_CUSTOMER_CRED,
  UPDATE_CUSTOMER_CRED,
  DELETE_CUSTOMER_CRED,
  CURRENT_CUSTOMER_CRED,
  CLEAR_CURRENT_CUSTOMER_CRED,
  CUSTOMER_CRED_ERROR,
  CLEAR_CUSTOMER_CRED_ERROR,
  SET_ONSCREEN_CUSTOMER_CREDS,
  CLEAR_ONSCREEN_CUSTOMER_CREDS,
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
    case GET_CUSTOMER_CREDS:
      return {
        ...state,
        records: action.payload,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_CUSTOMER_CREDS:
      return {
        ...state,
        records: null,
        onscrrecords: [],
        message: "",
        error: null,
      };
    case SET_ONSCREEN_CUSTOMER_CREDS:
      return {
        ...state,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_ONSCREEN_CUSTOMER_CREDS:
      return {
        ...state,
        onscrrecords: [],
      };
    case CURRENT_CUSTOMER_CRED:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_CUSTOMER_CRED:
      return {
        ...state,
        current: null,
      };
    case ADD_CUSTOMER_CRED:
      return {
        ...state,
        records: [action.payload, ...state.records],
        onscrrecords: [action.payload, ...state.onscrrecords],
        message: "Record Added.",
        loading: false,
      };
    case UPDATE_CUSTOMER_CRED:
      return {
        ...state,
        records: state.records.map((obj) =>
          obj.customer_cred_ID === action.payload.customer_cred_ID ? action.payload : obj
        ),
        onscrrecords: state.onscrrecords.map((obj) =>
          obj.customer_cred_ID === action.payload.customer_cred_ID ? action.payload : obj
        ),
        message: "Record Updated.",
        loading: false,
      };
    case DELETE_CUSTOMER_CRED:
      const filteredrecords = state.records.filter(
        (obj) => obj.customer_cred_ID !== action.payload
      );
      return {
        ...state,
        records: filteredrecords,
        onscrrecords: filteredrecords,
        message: "Record Deleted.",
        loading: false,
      };
    case CUSTOMER_CRED_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_CUSTOMER_CRED_ERROR:
      return {
        ...state,
        error: null,
        message: "",
      };
    default:
      return state;
  }
};
