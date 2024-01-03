import {  
  GET_STAFFS,
  CLEAR_STAFFS,
  ADD_STAFF,
  UPDATE_STAFF,
  DELETE_STAFF,
  CURRENT_STAFF,
  CLEAR_CURRENT_STAFF,
  STAFF_ERROR,
  CLEAR_STAFF_ERROR,
  SET_ONSCREEN_STAFFS,
  CLEAR_ONSCREEN_STAFFS,
} from './types';
import { fetchAction, setOnScreenRecords, addAction, updateAction, deleteAction } from './commonFunctions';

export const getRecords = () => (dispatch) => fetchAction('/Staff/getAll', GET_STAFFS, STAFF_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_STAFFS, STAFF_ERROR, dispatch);

export const addRecord = (obj) => (dispatch) => addAction(obj, '/Staff', ADD_STAFF, STAFF_ERROR, dispatch);

export const updateRecord = (obj) => (dispatch) => updateAction(obj, '/Staff', UPDATE_STAFF, STAFF_ERROR, dispatch);

export const deleteRecord = (id) => (dispatch) => deleteAction(`/Staff?id=${id}`, DELETE_STAFF, STAFF_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_STAFFS });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_STAFF, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_STAFF });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_STAFFS });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_STAFF_ERROR });