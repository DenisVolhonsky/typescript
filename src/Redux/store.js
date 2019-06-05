import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import postsReducer from './Posts/postsReducer';
import sessionReducer from './Auth/sessionReducer'
// import favoriteItemsReducer from './favoriteItemsReducer';


const rootReducer = combineReducers({
    postsReducer: postsReducer,
    session: sessionReducer,
    // favoriteItemsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;