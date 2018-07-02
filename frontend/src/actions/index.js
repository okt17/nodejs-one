import { SET_MESSAGE } from './types';

// add more exports to get rid of the Eslint's prefer-default-export
// eslint-disable-next-line import/prefer-default-export
export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
}
