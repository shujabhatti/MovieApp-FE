import {  
  GET_SCREEN_TIERS,
  GET_SHORT_SCREEN_TIERS,
  CLEAR_SCREEN_TIERS,
  ADD_SCREEN_TIER,
  UPDATE_SCREEN_TIER,
  DELETE_SCREEN_TIER,
  CURRENT_SCREEN_TIER,
  CLEAR_CURRENT_SCREEN_TIER,
  SCREEN_TIER_ERROR,
  CLEAR_SCREEN_TIER_ERROR,
  SET_ONSCREEN_SCREEN_TIERS,
  CLEAR_ONSCREEN_SCREEN_TIERS,
} from './types';
import { fetchAction, setOnScreenRecords, addAction, updateAction, deleteAction } from './commonFunctions';

export const getRecords = () => (dispatch) => fetchAction('/ScreenTier/getAll', GET_SCREEN_TIERS, SCREEN_TIER_ERROR, dispatch);

export const getShortList = () => (dispatch) => fetchAction('/ScreenTier/getShortList', GET_SHORT_SCREEN_TIERS, SCREEN_TIER_ERROR, dispatch);

export const setOnScrRecords = (obj) => (dispatch) => setOnScreenRecords(obj, SET_ONSCREEN_SCREEN_TIERS, SCREEN_TIER_ERROR, dispatch);

export const addRecord = (obj) => (dispatch) => addAction(obj, '/ScreenTier', ADD_SCREEN_TIER, SCREEN_TIER_ERROR, dispatch);

export const updateRecord = (obj) => (dispatch) => updateAction(obj, '/ScreenTier', UPDATE_SCREEN_TIER, SCREEN_TIER_ERROR, dispatch);

export const deleteRecord = (id) => (dispatch) => deleteAction(`/ScreenTier?id=${id}`, DELETE_SCREEN_TIER, SCREEN_TIER_ERROR, dispatch);

export const clearOnScrRecords = () => (dispatch) => dispatch({ type: CLEAR_ONSCREEN_SCREEN_TIERS });

export const setCurrentRecord = (obj) => (dispatch) => dispatch({ type: CURRENT_SCREEN_TIER, payload: obj });

export const clearCurrentRecord = () => (dispatch) => dispatch({ type: CLEAR_CURRENT_SCREEN_TIER });

export const clearRecords = () => (dispatch) => dispatch({ type: CLEAR_SCREEN_TIERS });

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_SCREEN_TIER_ERROR });