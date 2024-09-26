import axios from 'axios'
import setAuthHeader from '../Auth/userComponents/axiosUtils';
import { HandlError } from '../Auth/userComponents/HandlerError';

export const LANDING = 'LANDING';
export const PRODUCT = 'PRODUCT';
export const PRODUCT_BY_ID = 'PRODUCT_BY_ID';
export const ITEM = 'ITEM';
export const CLEAN_STATE = 'CLEAN_STATE';
export const ALL_USERS = 'ALL_USERS';
export const USER_BY_ID = 'USER_BY_ID'




//*%%%%%%% Rutas libres %%%%%%%%
export const getInfo = () => {
    return async (dispatch) => {
        try {
            const data = await axios('/api/v1/land');
            return dispatch({
                type: LANDING,
                payload:data.data
            })
        } catch (error) {
            console.error(error)
        }
    }
};
export const getProduct = ()=>{
    return async (dispatch) => {
        try {
            const data = await axios('/api/v1/product');
            return dispatch({
                type: PRODUCT,
                payload:data.data
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export const getProductById = (id)=>{
    return async (dispatch) => {
        try {
            const data = await axios(`/api/v1/product/${id}`);
            return dispatch({
                type: PRODUCT_BY_ID,
                payload:data.data
            })
        } catch (error) {
            console.error(error)
        }
    }
}
export const getItem = (id)=>{
  return async (dispatch) => {
      try {
          const data = await axios(`/api/v1/product/item/${id}`);
          return dispatch({
              type: ITEM,
              payload:data.data
          })
      } catch (error) {
          console.error(error)
      }
  }
}
export const cleanState = ()=>{
    return ({
        type: CLEAN_STATE,
        payload:[],
    }); 
}
//*====== Variables de usuario. =======

  export const getAllUsers = () => {
    return async (dispatch) => {
      try { console.log('soy getAllUsers')
        const data = await axios("/api/v1/user", setAuthHeader());
        console.log('soy la data', data.data)
        return dispatch({
          type: ALL_USERS,
          payload: data.data,
        });
      } catch (error) {
        HandlError(error);
      }
    };
  };
  export const getById = (id) => async (dispatch) => {
    try {
      const data = await axios(`/api/v1/user/${id}`, setAuthHeader());
      return dispatch({
        type: USER_BY_ID,
        payload: data.data,
      });
    } catch (error) {
      HandlError(error);
    }
  };