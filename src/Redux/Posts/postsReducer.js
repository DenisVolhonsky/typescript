import { actionTypes } from './types'

const initialState = []

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return action.payload;
    case actionTypes.FIND_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;