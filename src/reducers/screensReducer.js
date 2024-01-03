import {
  GET_SCREENS,
  GET_SHORT_SCREENS,
  CLEAR_SCREENS,
  ADD_SCREEN,
  UPDATE_SCREEN,
  DELETE_SCREEN,
  CURRENT_SCREEN,
  CLEAR_CURRENT_SCREEN,
  SCREEN_ERROR,
  CLEAR_SCREEN_ERROR,
  SET_ONSCREEN_SCREENS,
  CLEAR_ONSCREEN_SCREENS,
} from "../actions/types";

const initialState = {
  records: null,
  shortrecords: null,
  onscrrecords: [],
  current: null,
  loading: true,
  message: "",
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SCREENS:
      return {
        ...state,
        records: action.payload,
        onscrrecords: action.payload,
        loading: false,
      };
    case GET_SHORT_SCREENS:
      return {
        ...state,
        shortrecords: action.payload,
        loading: false,
      };
    case CLEAR_SCREENS:
      return {
        ...state,
        records: null,
        shortrecords: null,
        onscrrecords: [],
        message: "",
        error: null,
      };
    case SET_ONSCREEN_SCREENS:
      return {
        ...state,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_ONSCREEN_SCREENS:
      return {
        ...state,
        onscrrecords: [],
      };
    case CURRENT_SCREEN:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_SCREEN:
      return {
        ...state,
        current: null,
      };
    case ADD_SCREEN:
      return {
        ...state,
        records: [action.payload, ...state.records],
        onscrrecords: [action.payload, ...state.onscrrecords],
        message: "Record Added.",
        loading: false,
      };
    case UPDATE_SCREEN:
      return {
        ...state,
        records: state.records.map((obj) =>
          obj.screen_ID === action.payload.screen_ID ? action.payload : obj
        ),
        onscrrecords: state.onscrrecords.map((obj) =>
          obj.screen_ID === action.payload.screen_ID ? action.payload : obj
        ),
        message: "Record Updated.",
        loading: false,
      };
    case DELETE_SCREEN:
      const filteredrecords = state.records.filter(
        (obj) => obj.screen_ID !== action.payload
      );
      return {
        ...state,
        records: filteredrecords,
        onscrrecords: filteredrecords,
        message: "Record Deleted.",
        loading: false,
      };
    case SCREEN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_SCREEN_ERROR:
      return {
        ...state,
        error: null,
        message: "",
      };
    default:
      return state;
  }
};
