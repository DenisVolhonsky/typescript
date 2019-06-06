import {fetchData} from '../../API'

export const FETCH_DATA = 'FETCH_DATA';

export const getPosts = (category) => {
  return dispatch => {
    fetchData(category).then(data => {
      dispatch({
        type: FETCH_DATA,
        payload: data
      })
    });
  };
}
