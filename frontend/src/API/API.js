import { addPost, loadPosts, deletePostById, loadPostsById, updatePostById } from "../store/posts/action";
import { optimazeData } from "../utils/utils";
const baseUrl = 'http://localhost:8000'
export const getPosts = (url) => async (dispatch) => {
    const response = await fetch(`${baseUrl}${url}`);
    console.log(response);
    const data = await response.json();
    const posts = await optimazeData(data)
    dispatch(loadPosts(posts));
};

export const createPost = (post, url) => async (dispatch) => {
    const response = await fetch(`${baseUrl}${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    });

    if (response.ok) {
        const post = await response.json();
        dispatch(addPost(post));
        return post;
    }
};

export const getById = (id, url) => async (dispatch) => {
    const response = await fetch(`${baseUrl}${url}/${id}`);
    if (response.ok) {
        const post = await response.json();
        dispatch(loadPostsById(post));
        return post;
    }
};

export const deletePost = (id, url) => async (dispatch) => {
    console.log(id, url);
    const response = await fetch(`${baseUrl}${url}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const post = await response.json();
        dispatch(deletePostById(post.id));
        return post.id;
    }
};

export const updatePost = (post, url) => async (dispatch) => {
    const response = await fetch(`${baseUrl}${url}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    });
    if (response.ok) {
        const post = await response.json();
        dispatch(updatePostById(post));
        return post;
    }
};