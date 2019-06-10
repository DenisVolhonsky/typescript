// import {fetchFind} from '../../API'
// import { actionTypes, IPosts } from './types'

// export const findPosts = (title: string) => {
//   return (dispatch: any) => {
//     fetchFind(title).then((data: IPosts) => {
//       dispatch({
//         type: actionTypes.FIND_DATA,
//         payload: data
//       })
//     });
//   };
// }


import {fetchFind} from '../../API'
import { actionTypes } from './types'

export const findPosts = (title) => {
  return (dispatch) => {
    fetchFind(title).then((data) => {
      dispatch({
        type: actionTypes.FIND_DATA,
        payload: data
      })
    });
  };
}