import {  
  GET_TICKETS,
  CLEAR_TICKETS,
  ADD_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
  CURRENT_TICKET,
  CLEAR_CURRENT_TICKET,
  TICKET_ERROR,
  CLEAR_TICKET_ERROR,
  SET_ONSCREEN_TICKETS,
  CLEAR_ONSCREEN_TICKETS,
} from './types';
import { fetchAction, setOnScreenRecords, addAction, updateAction, deleteAction } from './commonFunctions';

export const getRecords = () => (dispatch) => fetchAction('/Ticket/getAll', GET_TICKETS, TICKET_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_TICKETS, TICKET_ERROR, dispatch);

export const addRecord = (obj) => (dispatch) => addAction(obj, '/Ticket', ADD_TICKET, TICKET_ERROR, dispatch);

export const updateRecord = (obj) => (dispatch) => updateAction(obj, '/Ticket', UPDATE_TICKET, TICKET_ERROR, dispatch);

export const deleteRecord = (id) => (dispatch) => deleteAction(`/Ticket?id=${id}`, DELETE_TICKET, TICKET_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_TICKETS });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_TICKET, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_TICKET });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_TICKETS });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_TICKET_ERROR });