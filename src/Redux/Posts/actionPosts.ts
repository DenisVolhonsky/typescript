import {fetchData} from '../../API'
import { Dispatch } from 'redux'
import { actionTypes, IPosts } from './types'

export const getPosts = (category: string) => {
  return (dispatch: Dispatch) => {
    fetchData(category).then((data: IPosts) => {
      dispatch({
        type: actionTypes.FETCH_DATA,
        payload: data
      })
    });
  };
}
