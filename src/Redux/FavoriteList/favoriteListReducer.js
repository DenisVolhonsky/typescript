import { actionTypes } from './types'

const initialState = []

const favoriteListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FAVORITE_DATA:
      return state.includes(payload) ? [...state] : [...state, payload]
    case actionTypes.REMOVE_FAVORITE_DATA:
      return state.filter(item => item.id !== payload.id)
    default:
      return state;
  }
};

export default favoriteListReducer;