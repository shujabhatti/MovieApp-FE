import axios from '../axios';

export const fetchAction = (url, successType, errorType, dispatch) => apiAction("get", url, successType, errorType, dispatch, null);

export const setOnScreenRecords = (obj, successType, errorType, dispatch) => apiAction("ocr", null, successType, errorType, dispatch, obj);

export const addAction = (obj, url, successType, errorType, dispatch) => apiAction("post", url, successType, errorType, dispatch, obj);

export const updateAction = (obj, url, successType, errorType, dispatch) => apiAction("put", url, successType, errorType, dispatch, obj);

export const deleteAction = (url, successType, errorType, dispatch) => apiAction("delete", url, successType, errorType, dispatch, null);

const apiAction = async (type, url, successType, errorType, dispatch, obj) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    if(type === "get"){
      const res = await axios.get(url);
      dispatch({
        type: successType,
        payload: res.data
      });
    }
    else if(type === "post"){
      const res = await axios.post(url, obj, config);
      dispatch({
        type: successType,
        payload: res.data
      });
    }
    else if(type === "put"){
      const res = await axios.put(url, obj, config);
      dispatch({
        type: successType,
        payload: {
          currentRecord: obj,
          Message: res.data.Message
        },
      });
    }
    else if(type === "delete"){
      const res = await axios.delete(url);
      var urlParams = new URLSearchParams(url);
      dispatch({
        type: successType,
        payload: { 
          ID: urlParams.get("id"), 
          Message : res.data.Message
        },
      });
    }
    else if(type === "ocr"){
      // for onscreen records
      const data = await obj;
      dispatch({
        type: successType,
        payload: data,
      });
    }

  } catch (err) {
    if(err.response){
      dispatch({
        type: errorType,
        payload: err.response.data.Message,
      });
    } else {
      dispatch({
        type: errorType,
        payload: err.message,
      });
    }
  }
}

export const getCurrentDate = () => {

  Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
  };

  var d = new Date,
  dformat = [d.getFullYear().padLeft(),
    (d.getMonth()+1).padLeft(),
    d.getDate()].join('-') +' ' +
   [d.getHours().padLeft(),
    d.getMinutes().padLeft(),
    d.getSeconds().padLeft()].join(':');
    
    return dformat.toString();
}