import {
  GET_CUSTOMERS,
  CLEAR_CUSTOMERS,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  CURRENT_CUSTOMER,
  CLEAR_CURRENT_CUSTOMER,
  CUSTOMER_ERROR,
  CLEAR_CUSTOMER_ERROR,
  SET_ONSCREEN_CUSTOMERS,
  CLEAR_ONSCREEN_CUSTOMERS,
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
    case GET_CUSTOMERS:
      return {
        ...state,
        records: action.payload,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_CUSTOMERS:
      return {
        ...state,
        records: null,
        onscrrecords: [],
        message: "",
        error: null,
      };
    case SET_ONSCREEN_CUSTOMERS:
      return {
        ...state,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_ONSCREEN_CUSTOMERS:
      return {
        ...state,
        onscrrecords: [],
      };
    case CURRENT_CUSTOMER:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_CUSTOMER:
      return {
        ...state,
        current: null,
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        records: [action.payload, ...state.records],
        onscrrecords: [action.payload, ...state.onscrrecords],
        message: "Record Added.",
        loading: false,
      };
    case UPDATE_CUSTOMER:
      return {
        ...state,
        records: state.records.map((obj) =>
          obj.customer_ID === action.payload.customer_ID ? action.payload : obj
        ),
        onscrrecords: state.onscrrecords.map((obj) =>
          obj.customer_ID === action.payload.customer_ID ? action.payload : obj
        ),
        message: "Record Updated.",
        loading: false,
      };
    case DELETE_CUSTOMER:
      const filteredrecords = state.records.filter(
        (obj) => obj.customer_ID !== action.payload
      );
      return {
        ...state,
        records: filteredrecords,
        onscrrecords: filteredrecords,
        message: "Record Deleted.",
        loading: false,
      };
    case CUSTOMER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_CUSTOMER_ERROR:
      return {
        ...state,
        error: null,
        message: "",
      };
    default:
      return state;
  }
};
