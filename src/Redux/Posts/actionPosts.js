import {fetchData} from '../../API'
import { actionTypes } from './types'

export const getPosts = category => {
  return dispatch => {
    fetchData(category).then(data => {
      dispatch({
        type: actionTypes.FETCH_DATA,
        payload: data
      })
    });
  };
}
