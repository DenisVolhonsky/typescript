import axios from 'axios'

import {
    signUpRequest, 
    signUpSucces, 
    signUpError, 
} from './actions'

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