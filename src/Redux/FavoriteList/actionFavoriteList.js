import { actionTypes } from './types'

export const favoriteItems = item => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.FAVORITE_DATA,
      payload: item
    })
    localStorage.setItem("favoriteItems", JSON.stringify(getState().favorite));
  }
}

export const favoriteItemsRemove = item => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.REMOVE_FAVORITE_DATA,
      payload: item
    })
    localStorage.setItem("favoriteItems", JSON.stringify(getState().favorite));
  }
}