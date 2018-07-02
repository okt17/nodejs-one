import { SET_MESSAGE } from '../actions/types';

const initialState = {
  message: undefined,
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
