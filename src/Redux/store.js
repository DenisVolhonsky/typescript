import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import postsReducer from './Posts/postsReducer'
import sessionReducer from './Auth/sessionReducer'
import favoriteListReducer from './FavoriteList/favoriteListReducer'

const rootReducer = combineReducers({
    posts: postsReducer,
    session: sessionReducer,
    favorite: favoriteListReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;