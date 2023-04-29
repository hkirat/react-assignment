// actions.js

export const UPDATE_ID = 'UPDATE_ID';

export const updateId = (newId) => {
  return {
    type: UPDATE_ID,
    payload: newId
  };
};
