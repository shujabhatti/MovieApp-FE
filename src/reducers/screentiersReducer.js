import {
  GET_SCREEN_TIERS,
  GET_SHORT_SCREEN_TIERS,
  CLEAR_SCREEN_TIERS,
  ADD_SCREEN_TIER,
  UPDATE_SCREEN_TIER,
  DELETE_SCREEN_TIER,
  CURRENT_SCREEN_TIER,
  CLEAR_CURRENT_SCREEN_TIER,
  SCREEN_TIER_ERROR,
  CLEAR_SCREEN_TIER_ERROR,
  SET_ONSCREEN_SCREEN_TIERS,
  CLEAR_ONSCREEN_SCREEN_TIERS,
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
    case GET_SCREEN_TIERS:
      return {
        ...state,
        records: action.payload,
        onscrrecords: action.payload,
        loading: false,
      };
    case GET_SHORT_SCREEN_TIERS:
      return {
        ...state,
        shortrecords: action.payload,
        loading: false,
      };
    case CLEAR_SCREEN_TIERS:
      return {
        ...state,
        records: null,
        shortrecords: null,
        onscrrecords: [],
        message: "",
        error: null,
      };
    case SET_ONSCREEN_SCREEN_TIERS:
      return {
        ...state,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_ONSCREEN_SCREEN_TIERS:
      return {
        ...state,
        onscrrecords: [],
      };
    case CURRENT_SCREEN_TIER:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_SCREEN_TIER:
      return {
        ...state,
        current: null,
      };
    case ADD_SCREEN_TIER:
      return {
        ...state,
        records: [action.payload, ...state.records],
        onscrrecords: [action.payload, ...state.onscrrecords],
        message: "Record Added.",
        loading: false,
      };
    case UPDATE_SCREEN_TIER:
      return {
        ...state,
        records: state.records.map((obj) =>
          obj.tier_ID === action.payload.tier_ID ? action.payload : obj
        ),
        onscrrecords: state.onscrrecords.map((obj) =>
          obj.tier_ID === action.payload.tier_ID ? action.payload : obj
        ),
        message: "Record Updated.",
        loading: false,
      };
    case DELETE_SCREEN_TIER:
      const filteredrecords = state.records.filter(
        (obj) => obj.tier_ID !== action.payload
      );
      return {
        ...state,
        records: filteredrecords,
        onscrrecords: filteredrecords,
        message: "Record Deleted.",
        loading: false,
      };
    case SCREEN_TIER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_SCREEN_TIER_ERROR:
      return {
        ...state,
        error: null,
        message: "",
      };
    default:
      return state;
  }
};
