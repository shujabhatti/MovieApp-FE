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

export const getRecords = () => async (dispatch) =>
  fetchAction('/Customer/getAllCustomers', GET_CUSTOMERS, CUSTOMER_ERROR, dispatch);

export const setOnScrRecords = (obj) => async (dispatch) => 
  setOnScreenRecords(obj, SET_ONSCREEN_CUSTOMERS, CUSTOMER_ERROR, dispatch);

export const addRecord = (formData) => async (dispatch) =>
  addAction(formData, '/Customer/postCustomer', ADD_CUSTOMER, CUSTOMER_ERROR, dispatch);

export const updateRecord = (formData) => async (dispatch) => 
  updateAction(formData, '/Customer/putCustomer', UPDATE_CUSTOMER, CUSTOMER_ERROR, dispatch);

export const deleteRecord = (ID) => async (dispatch) => 
  deleteAction(ID, `/Customer/deleteCustomer?id=${ID}`, DELETE_CUSTOMER, CUSTOMER_ERROR, dispatch);

export const clearOnScrRecords = () => async (dispatch) => 
  dispatch({ type: CLEAR_ONSCREEN_CUSTOMERS });

export const setCurrentRecord = (obj) => async (dispatch) =>
  dispatch({ type: CURRENT_CUSTOMER, payload: obj });

export const clearCurrentRecord = () => async (dispatch) => 
  dispatch({ type: CLEAR_CURRENT_CUSTOMER });

export const clearRecords = () => async (dispatch) =>
  dispatch({ type: CLEAR_CUSTOMERS });

export const clearErrors = () => async (dispatch) => 
  dispatch({ type: CLEAR_CUSTOMER_ERROR });

// export const deleteObj = (id) => (dispatch) => {
//   if(id){
//     axios.delete(`/Customer/deleteCustomer?id=${id}`).then(() => dispatch({type: DELETE_CUSTOMER}));
//   }
// };

// export const updateObj = (obj) => (dispatch) => {
//   if(obj){
//     axios.put(`/Customer/putCustomer`, obj).then(() => dispatch({type: UPDATE_CUSTOMER}));
//   }
// };

// export const addObj = (obj) => (dispatch) => {
//   if(obj){
//     axios.post(`/Customer/postCustomer`, obj).then(() => dispatch({type: ADD_CUSTOMER}));
//   }
// };

// export const currentObj = (id) => (dispatch) => {
//   if(id){
//     axios
//       .get(`/Customer/getCustomer?id=${id}`)
//       .then((res) =>
//         dispatch({
//           type: CURRENT_CUSTOMER,
//           payload: {
//             id: res.data[0]._id,
//             name: res.data[0].name,
//           }
//         }));
//   }
// };

// export const getAll = () => async (dispatch) => {
//   try {
//     const res = await axios.get(`/Customer/getAllCustomers`);

//     dispatch({
//       type: GET_CUSTOMERS,
//       payload: res.data
//     });
//   } catch (err) {
//     if(err.response){
//       console.log(JSON.parse(err.response));
//       dispatch({
//         type: ERROR_CUSTOMER,
//         payload: err.response.data.msg,
//       });
//     } else {
//       dispatch({
//         type: ERROR_CUSTOMER,
//         payload: err.message,
//       });
//     }
//   }
// };