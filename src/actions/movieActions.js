import {  
  GET_MOVIES,
  GET_SHORT_MOVIES,
  CLEAR_MOVIES,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
  CURRENT_MOVIE,
  CLEAR_CURRENT_MOVIE,
  MOVIE_ERROR,
  CLEAR_MOVIE_ERROR,
  SET_ONSCREEN_MOVIES,
  CLEAR_ONSCREEN_MOVIES,
} from './types';
import { fetchAction, setOnScreenRecords, addAction, updateAction, deleteAction } from './commonFunctions';

export const getRecords = () => (dispatch) => fetchAction('/Movie/getAll', GET_MOVIES, MOVIE_ERROR, dispatch);

export const getShortList = () => (dispatch) => fetchAction('/Movie/getShortList', GET_SHORT_MOVIES, MOVIE_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_MOVIES, MOVIE_ERROR, dispatch);

export const addRecord = (obj) => (dispatch) => addAction(obj, '/Movie', ADD_MOVIE, MOVIE_ERROR, dispatch);

export const updateRecord = (obj) => (dispatch) => updateAction(obj, '/Movie', UPDATE_MOVIE, MOVIE_ERROR, dispatch);

export const deleteRecord = (id) => (dispatch) => deleteAction(`/Movie?id=${id}`, DELETE_MOVIE, MOVIE_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_MOVIES });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_MOVIE, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_MOVIE });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_MOVIES });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_MOVIE_ERROR });