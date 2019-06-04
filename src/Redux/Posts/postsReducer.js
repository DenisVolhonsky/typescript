import { FETCH_DATA } from './actionPosts'

const initialState = []

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default postsReducer;