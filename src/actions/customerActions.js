import {  
  GET_CUSTOMERS,
  GET_SHORT_CUSTOMERS,
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

export const getShortList = () => (dispatch) => fetchAction('/Customer/getShortList', GET_SHORT_CUSTOMERS, CUSTOMER_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_CUSTOMERS, CUSTOMER_ERROR, dispatch);

export const addRecord = (obj) => (dispatch) => addAction(obj, '/Customer', ADD_CUSTOMER, CUSTOMER_ERROR, dispatch);

export const updateRecord = (obj) => (dispatch) => updateAction(obj, '/Customer', UPDATE_CUSTOMER, CUSTOMER_ERROR, dispatch);

export const deleteRecord = (id) => (dispatch) => deleteAction(`/Customer?id=${id}`, DELETE_CUSTOMER, CUSTOMER_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_CUSTOMERS });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_CUSTOMER, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_CUSTOMER });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_CUSTOMERS });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_CUSTOMER_ERROR });