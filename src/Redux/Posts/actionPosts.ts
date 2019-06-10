import {fetchData} from '../../API'
import { Dispatch } from 'redux'
import { FETCH_DATA, IPosts } from './types'

export const getPosts = (category: string) => {
  return (dispatch: Dispatch) => {
    fetchData(category).then((data: IPosts) => {
      dispatch({
        type: FETCH_DATA,
        payload: data
      })
    });
  };
}
