import { FAVORITE_DATA } from './actionFavoriteList'


const initialState = []

const favoriteListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAVORITE_DATA:
      return state.includes(payload) ? [...state] : [...state, payload]
    default:
      return state;
  }
};

export default favoriteListReducer;


// arr.filter((item, index, self) => index === self.findIndex(t => t.id === item.id));
// [...state, action.payload];