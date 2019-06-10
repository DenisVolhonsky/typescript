import {fetchFind} from '../../API'
import { Dispatch } from 'redux'
import { FIND_DATA, IPosts } from './types'

export const findPosts = (title: string) => {
  return (dispatch: Dispatch) => {
    fetchFind(title).then((data: IPosts) => {
      dispatch({
        type: FIND_DATA,
        payload: data
      })
    });
  };
}