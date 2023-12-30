import {  
  GET_CUSTOMERS,
  CLEAR_CUSTOMERS,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  CURRENT_CUSTOMER,
  CLEAR_CURRENT_CUSTOMER,
  CUSTOMER_ERROR,
  CLEAR_CUSTOMER_ERROR,
  SET_ONSCREEN_CUSTOMERS,
  CLEAR_ONSCREEN_CUSTOMERS,
} from './types';
import { fetchAction, setOnScreenRecords, addAction, updateAction, deleteAction } from './commonFunctions';

export const getRecords = () => (dispatch) => fetchAction('/Customer/getAll', GET_CUSTOMERS, CUSTOMER_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_CUSTOMERS, CUSTOMER_ERROR, dispatch);

export const addRecord = (formData) => (dispatch) => addAction(formData, '/Customer', ADD_CUSTOMER, CUSTOMER_ERROR, dispatch);

export const updateRecord = (formData) => (dispatch) => updateAction(formData, '/Customer', UPDATE_CUSTOMER, CUSTOMER_ERROR, dispatch);

export const deleteRecord = (ID) => (dispatch) => deleteAction(ID, '/Customer', DELETE_CUSTOMER, CUSTOMER_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_CUSTOMERS });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_CUSTOMER, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_CUSTOMER });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_CUSTOMERS });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_CUSTOMER_ERROR });