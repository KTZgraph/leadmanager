import { CREATE_MESSAGE } from './types';

// CREATE MESSAGe
export const createMessage = (msg) => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};

