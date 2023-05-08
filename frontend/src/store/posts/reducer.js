import {
  ADD_POST,
  LOAD_POSTS,
  UPDATE_POST,
  DELETE_POST,
  LOAD_BY_ID_POST,
} from "./type.js";

const initialState = { posts: {}, isLoading: false, post: null, id: null };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...state, posts: action.posts};
    case ADD_POST:
      const newState = {...state}
      newState.posts = {...newState.posts, [action.post.id]:action.post}
      return newState;
    case UPDATE_POST:
      const stateForUpdate = {...state}
      stateForUpdate.posts = {...stateForUpdate.posts, [action.post.id]:action.post}
      stateForUpdate.post=action.post
      return stateForUpdate;
    case DELETE_POST:
      const stateForDelete={...state}
      delete stateForDelete.posts[action.id]
      stateForDelete.id = action.id
      return stateForDelete;
    case LOAD_BY_ID_POST:
      const newOne = {...state}
      newOne.post = action.post
      return newOne;
    default:
      return state;
  }
};

export default postReducer;
