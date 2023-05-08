import {
  ADD_POST,
  LOAD_POSTS,
  UPDATE_POST,
  DELETE_POST,
  LOAD_BY_ID_POST,
} from "./type.js";

export const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    posts,
  };
};

export const addPost = (post) => {
  return {
    type: ADD_POST,
    post,
  };
};

export const deletePostById = (id) => {
    return {
      type: DELETE_POST,
      id,
    };
  };

  export const loadPostsById = (post) => {
    return {
      type: LOAD_BY_ID_POST,
      post,
    };
  };

  export const updatePostById = (post) => {
    return {
      type: UPDATE_POST,
      post,
    };
  };