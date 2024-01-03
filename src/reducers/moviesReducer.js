import {
  GET_MOVIES,
  CLEAR_MOVIES,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
  CURRENT_MOVIE,
  CLEAR_CURRENT_MOVIE,
  MOVIE_ERROR,
  CLEAR_MOVIE_ERROR,
  SET_ONSCREEN_MOVIES,
  CLEAR_ONSCREEN_MOVIES,
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
    case GET_MOVIES:
      return {
        ...state,
        records: action.payload,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        records: null,
        onscrrecords: [],
        message: "",
        error: null,
      };
    case SET_ONSCREEN_MOVIES:
      return {
        ...state,
        onscrrecords: action.payload,
        loading: false,
      };
    case CLEAR_ONSCREEN_MOVIES:
      return {
        ...state,
        onscrrecords: [],
      };
    case CURRENT_MOVIE:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT_MOVIE:
      return {
        ...state,
        current: null,
      };
    case ADD_MOVIE:
      return {
        ...state,
        records: [action.payload, ...state.records],
        onscrrecords: [action.payload, ...state.onscrrecords],
        message: "Record Added.",
        loading: false,
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        records: state.records.map((obj) =>
          obj.movie_ID === action.payload.movie_ID ? action.payload : obj
        ),
        onscrrecords: state.onscrrecords.map((obj) =>
          obj.movie_ID === action.payload.movie_ID ? action.payload : obj
        ),
        message: "Record Updated.",
        loading: false,
      };
    case DELETE_MOVIE:
      const filteredrecords = state.records.filter(
        (obj) => obj.movie_ID !== action.payload
      );
      return {
        ...state,
        records: filteredrecords,
        onscrrecords: filteredrecords,
        message: "Record Deleted.",
        loading: false,
      };
    case MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_MOVIE_ERROR:
      return {
        ...state,
        error: null,
        message: "",
      };
    default:
      return state;
  }
};
