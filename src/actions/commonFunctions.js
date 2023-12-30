import axios from '../axios';

export const fetchAction = async (url, successType, errorType, dispatch) => {

  try {
    const res = await axios.get(url);

    dispatch({
      type: successType,
      payload: res.data
    });

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
};

export const setOnScreenRecords = async (obj, successType, errorType, dispatch) => {

  try {
    const data = await obj;

    dispatch({
      type: successType,
      payload: data,
    });
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
};

export const addAction = async (obj, url, successType, errorType, dispatch) => {

  try {
    
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    const res = await axios.post(url, obj, config);

    dispatch({
      type: successType,
      payload: res.data
    });

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
};

export const updateAction = async (formData, url, successType, errorType, dispatch) => {

  try {
    
    const config = {
      headers: {
        "Content-Type": "application/json"
      },
    };

    const res = await axios.put(url, formData, config);

    dispatch({
      type: successType,
      payload: {
        currentRecord: formData,
        Message: res.data.Message
      },
    });

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
};

export const deleteAction = async (ID, url, successType, errorType, dispatch) => {

  try {
    const res = await axios.delete(`${url}?id=${ID}`);

    dispatch({
      type: successType,
      payload: { 
        ID, 
        Message : res.data.Message
      },
    });

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
};

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