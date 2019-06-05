export const actionTypes = {
    SIGN_UP_REQUEST: 'session/SIGN_UP_REQUEST',
    SIGN_UP_SUCCESS: 'session/SIGN_UP_SUCCESS',
    SIGN_UP_ERROR: 'session/SIGN_UP_ERROR',
    SIGN_IN: 'session/SIGN_IN',
    SIGN_OUT: 'session/SIGN_UP',
    GET_CURRENT: 'session/CURRENT',
};

export const signUpRequest = () => ({
    type: actionTypes.SIGN_UP_REQUEST
});

export const signUpSucces = data => ({
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: data
});

export const signUpError = error => ({
    type: actionTypes.SIGN_UP_ERROR,
    payload: {
        error
    }
});