import axios from 'axios'

import {
    signUpRequest, 
    signUpSucces, 
    signUpError,

    signInRequest,
    signInSuccess,
    signInError,

    signOutRequest,
    signOutSuccess,
} from './actions'

// import * as selectors from './selectors'

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
  
const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = null;
};


// credentials:
// {name: "Denis", email: "dvolhonsky@gmail.com", password: "12345"}
// data returns user and token

export const signUp = credentials => dispatch => {
    dispatch(signUpRequest());
    axios
    .post('http://localhost:4040/auth/signup', credentials)
    .then(({data}) => { dispatch(signUpSucces(data))})
    .catch(error => dispatch(signUpError(error)))
};

export const signIn = credentials => dispatch => {
    dispatch(signInRequest());
    axios
      .post('http://localhost:4040/auth/signin', credentials)
      .then(({ data }) => {
        setAuthHeader(data.token);
        dispatch(signInSuccess(data));
      })
      .catch(error => dispatch(signInError(error)));
  };
  
  export const signOut = () => dispatch => {
    dispatch(signOutRequest());
    axios.post('http://localhost:4040/auth/signout').then(() => {
    clearAuthHeader();
    dispatch(signOutSuccess());
    });
  };
  