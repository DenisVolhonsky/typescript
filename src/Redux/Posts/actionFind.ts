import {fetchFind} from '../../API'
import { Dispatch } from 'redux'
import { actionTypes, IPosts } from './types'

export const findPosts = (title: string) => {
  return (dispatch: Dispatch) => {
    fetchFind(title).then((data: IPosts) => {
      dispatch({
        type: actionTypes.FIND_DATA,
        payload: data
      })
    });
  };
}