import { CREATE_MESSAGE, GET_ERRORS } from './types';

// CREATE MESSAGe
export const createMessage = (msg) => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
    return {
      type: GET_ERRORS,
      payload: { msg, status },
    };
  };