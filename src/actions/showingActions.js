import {  
  GET_SHOWINGS,
  CLEAR_SHOWINGS,
  ADD_SHOWING,
  UPDATE_SHOWING,
  DELETE_SHOWING,
  CURRENT_SHOWING,
  CLEAR_CURRENT_SHOWING,
  SHOWING_ERROR,
  CLEAR_SHOWING_ERROR,
  SET_ONSCREEN_SHOWINGS,
  CLEAR_ONSCREEN_SHOWINGS,
} from './types';
import { fetchAction, setOnScreenRecords, addAction, updateAction, deleteAction } from './commonFunctions';

export const getRecords = () => (dispatch) => fetchAction('/Showing/getAll', GET_SHOWINGS, SHOWING_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_SHOWINGS, SHOWING_ERROR, dispatch);

export const addRecord = (obj) => (dispatch) => addAction(obj, '/Showing', ADD_SHOWING, SHOWING_ERROR, dispatch);

export const updateRecord = (obj) => (dispatch) => updateAction(obj, '/Showing', UPDATE_SHOWING, SHOWING_ERROR, dispatch);

export const deleteRecord = (id) => (dispatch) => deleteAction(`/Showing?id=${id}`, DELETE_SHOWING, SHOWING_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_SHOWINGS });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_SHOWING, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_SHOWING });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_SHOWINGS });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_SHOWING_ERROR });