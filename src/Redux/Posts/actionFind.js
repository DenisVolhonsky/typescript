import {fetchFind} from '../../API'

export const FIND_DATA = 'FIND_DATA';

export const findPosts = title => {
  return dispatch => {
    fetchFind(title).then(data => {
      dispatch({
        type: FIND_DATA,
        payload: data
      })
    });
  };
}
