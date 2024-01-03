import {  
  GET_CUSTOMER_CREDS,
  CLEAR_CUSTOMER_CREDS,
  ADD_CUSTOMER_CRED,
  UPDATE_CUSTOMER_CRED,
  DELETE_CUSTOMER_CRED,
  CURRENT_CUSTOMER_CRED,
  CLEAR_CURRENT_CUSTOMER_CRED,
  CUSTOMER_CRED_ERROR,
  CLEAR_CUSTOMER_CRED_ERROR,
  SET_ONSCREEN_CUSTOMER_CREDS,
  CLEAR_ONSCREEN_CUSTOMER_CREDS,
} from './types';
import { fetchAction, setOnScreenRecords, addAction, updateAction, deleteAction } from './commonFunctions';

export const getRecords = () => (dispatch) => fetchAction('/CustomerCred/getAll', GET_CUSTOMER_CREDS, CUSTOMER_CRED_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_CUSTOMER_CREDS, CUSTOMER_CRED_ERROR, dispatch);

export const addRecord = (obj) => (dispatch) => addAction(obj, '/CustomerCred', ADD_CUSTOMER_CRED, CUSTOMER_CRED_ERROR, dispatch);

export const updateRecord = (obj) => (dispatch) => updateAction(obj, '/CustomerCred', UPDATE_CUSTOMER_CRED, CUSTOMER_CRED_ERROR, dispatch);

export const deleteRecord = (id) => (dispatch) => deleteAction(`/CustomerCred?id=${id}`, DELETE_CUSTOMER_CRED, CUSTOMER_CRED_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_CUSTOMER_CREDS });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_CUSTOMER_CRED, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_CUSTOMER_CRED });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_CUSTOMER_CREDS });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_CUSTOMER_CRED_ERROR });