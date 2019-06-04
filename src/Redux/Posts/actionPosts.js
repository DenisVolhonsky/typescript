import {fetchData} from '../../API'

export const FETCH_DATA = 'FETCH_DATA';

export const getInitialData = () => {
  return dispatch => {
    fetchData('popular').then(data => {
      dispatch({
        type: FETCH_DATA,
        payload: data
      })
    });
  };
}
