import {  
  GET_SEATS,
  GET_SHORT_SEATS,
  CLEAR_SEATS,
  ADD_SEAT,
  UPDATE_SEAT,
  DELETE_SEAT,
  CURRENT_SEAT,
  CLEAR_CURRENT_SEAT,
  SEAT_ERROR,
  CLEAR_SEAT_ERROR,
  SET_ONSCREEN_SEATS,
  CLEAR_ONSCREEN_SEATS,
} from './types';
import { fetchAction, setOnScreenRecords, addAction, updateAction, deleteAction } from './commonFunctions';

export const getRecords = () => (dispatch) => fetchAction('/Seat/getAll', GET_SEATS, SEAT_ERROR, dispatch);

export const getShortList = () => (dispatch) => fetchAction('/Seat/getShortList', GET_SHORT_SEATS, SEAT_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_SEATS, SEAT_ERROR, dispatch);

export const addRecord = (obj) => (dispatch) => addAction(obj, '/Seat', ADD_SEAT, SEAT_ERROR, dispatch);

export const updateRecord = (obj) => (dispatch) => updateAction(obj, '/Seat', UPDATE_SEAT, SEAT_ERROR, dispatch);

export const deleteRecord = (id) => (dispatch) => deleteAction(`/Seat?id=${id}`, DELETE_SEAT, SEAT_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_SEATS });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_SEAT, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_SEAT });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_SEATS });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_SEAT_ERROR });