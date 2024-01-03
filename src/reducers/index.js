import { combineReducers } from "redux";
import customersReducer from "./customersReducer";
import customercredsReducer from "./customercredsReducer";
import moviesReducer from "./moviesReducer";
import screensReducer from "./screensReducer";
import screentiersReducer from "./screentiersReducer";
import seatsReducer from "./seatsReducer";
import seattypesReducer from "./seattypesReducer";
import showingsReducer from "./showingsReducer";
import staffsReducer from "./staffsReducer";
import staffcredsReducer from "./staffcredsReducer";
import ticketsReducer from "./ticketsReducer";

export default combineReducers({
  customers: customersReducer,
  customercreds: customercredsReducer,
  movies: moviesReducer,
  screens: screensReducer,
  screentiers: screentiersReducer,
  seats: seatsReducer,
  seattypes: seattypesReducer,
  showings: showingsReducer,
  staffs: staffsReducer,
  staffcreds: staffcredsReducer,
  tickets: ticketsReducer
});
