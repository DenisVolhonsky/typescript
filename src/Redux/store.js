import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import postsReducer from './Posts/postsReducer';
import sessionReducer from './Auth/sessionReducer'


const rootReducer = combineReducers({
    posts: postsReducer,
    session: sessionReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;