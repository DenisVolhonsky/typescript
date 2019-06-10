import { actionTypes, IPosts } from './types'

const initialState: IPosts[] = []

interface IAction {
  type: string;
  payload: IPosts[]
}

const postsReducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case actionTypes.FETCH_DATA:
      return payload;
    case actionTypes.FIND_DATA:
      return payload;
    default:
      return state;
  }
};

export default postsReducer;