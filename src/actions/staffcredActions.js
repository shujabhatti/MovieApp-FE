import {  
  GET_STAFF_CREDS,
  CLEAR_STAFF_CREDS,
  ADD_STAFF_CRED,
  UPDATE_STAFF_CRED,
  DELETE_STAFF_CRED,
  CURRENT_STAFF_CRED,
  CLEAR_CURRENT_STAFF_CRED,
  STAFF_CRED_ERROR,
  CLEAR_STAFF_CRED_ERROR,
  SET_ONSCREEN_STAFF_CREDS,
  CLEAR_ONSCREEN_STAFF_CREDS,
} from './types';
import { fetchAction, setOnScreenRecords, addAction, updateAction, deleteAction } from './commonFunctions';

export const getRecords = () => (dispatch) => fetchAction('/StaffCredential/getAll', GET_STAFF_CREDS, STAFF_CRED_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_STAFF_CREDS, STAFF_CRED_ERROR, dispatch);

export const addRecord = (obj) => (dispatch) => addAction(obj, '/StaffCredential', ADD_STAFF_CRED, STAFF_CRED_ERROR, dispatch);

export const updateRecord = (obj) => (dispatch) => updateAction(obj, '/StaffCredential', UPDATE_STAFF_CRED, STAFF_CRED_ERROR, dispatch);

export const deleteRecord = (id) => (dispatch) => deleteAction(`/StaffCredential?id=${id}`, DELETE_STAFF_CRED, STAFF_CRED_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_STAFF_CREDS });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_STAFF_CRED, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_STAFF_CRED });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_STAFF_CREDS });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_STAFF_CRED_ERROR });