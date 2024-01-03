import {  
  GET_SCREENS,
  CLEAR_SCREENS,
  ADD_SCREEN,
  UPDATE_SCREEN,
  DELETE_SCREEN,
  CURRENT_SCREEN,
  CLEAR_CURRENT_SCREEN,
  SCREEN_ERROR,
  CLEAR_SCREEN_ERROR,
  SET_ONSCREEN_SCREENS,
  CLEAR_ONSCREEN_SCREENS,
} from './types';
import { fetchAction, setOnScreenRecords, addAction, updateAction, deleteAction } from './commonFunctions';

export const getRecords = () => (dispatch) => fetchAction('/Screen/getAll', GET_SCREENS, SCREEN_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_SCREENS, SCREEN_ERROR, dispatch);

export const addRecord = (obj) => (dispatch) => addAction(obj, '/Screen', ADD_SCREEN, SCREEN_ERROR, dispatch);

export const updateRecord = (obj) => (dispatch) => updateAction(obj, '/Screen', UPDATE_SCREEN, SCREEN_ERROR, dispatch);

export const deleteRecord = (id) => (dispatch) => deleteAction(`/Screen?id=${id}`, DELETE_SCREEN, SCREEN_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_SCREENS });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_SCREEN, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_SCREEN });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_SCREENS });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_SCREEN_ERROR });