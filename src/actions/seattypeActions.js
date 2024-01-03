import {  
  GET_SEAT_TYPES,
  GET_SHORT_SEAT_TYPES,
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
} from './types';
import { fetchAction, setOnScreenRecords, addAction, updateAction, deleteAction } from './commonFunctions';

export const getRecords = () => (dispatch) => fetchAction('/SeatType/getAll', GET_SEAT_TYPES, SEAT_TYPE_ERROR, dispatch);

export const getShortList = () => (dispatch) => fetchAction('/SeatType/getShortList', GET_SHORT_SEAT_TYPES, SEAT_TYPE_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_SEAT_TYPES, SEAT_TYPE_ERROR, dispatch);

export const addRecord = (obj) => (dispatch) => addAction(obj, '/SeatType', ADD_SEAT_TYPE, SEAT_TYPE_ERROR, dispatch);

export const updateRecord = (obj) => (dispatch) => updateAction(obj, '/SeatType', UPDATE_SEAT_TYPE, SEAT_TYPE_ERROR, dispatch);

export const deleteRecord = (id) => (dispatch) => deleteAction(`/SeatType?id=${id}`, DELETE_SEAT_TYPE, SEAT_TYPE_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_SEAT_TYPES });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_SEAT_TYPE, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_SEAT_TYPE });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_SEAT_TYPES });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_SEAT_TYPE_ERROR });