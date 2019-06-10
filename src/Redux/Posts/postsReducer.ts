import { FETCH_DATA, FIND_DATA, IPosts } from './types'

const initialState: IPosts[] = []

interface IAction {
  type: string;
  payload: IPosts[]
}

const postsReducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case FETCH_DATA:
      return payload;
    case FIND_DATA:
      return payload;
    default:
      return state;
  }
};

export default postsReducer;