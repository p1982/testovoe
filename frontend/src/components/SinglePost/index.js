import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../context/FormContext';
import './SinglePost.css';
import Button from '../common/Button';
import PostInput from '../PostInput';
import { getById, deletePost } from '../../API/API';

const SinglePost = () => {
  const { id } = useParams();
  const { isEditForm, setIsEditForm } = useForm()
  const history = useHistory()
  const dispatch = useDispatch()
  const singlePost = useSelector(state => state.posts.post || {});
  const { title, text, url } = singlePost

  const urlGetById = '/api/posts'
  useEffect(() => {
    dispatch(getById(id, urlGetById))
  }, [dispatch, id])

  const handleDelete = () => {
    dispatch(deletePost(id, urlGetById))
    history.push('/posts')
  }
  return (
    <main className='container'>
      <div className='SinglePost'>
        <h1>{title}</h1>
        <p>
          {text}
        </p>
        <img src={url} alt={title} />
        <Button type="button" text="Edit Post" onClick={() => setIsEditForm(!isEditForm)} />
        <Button type="button" text="Delete Post" onClick={handleDelete} />
        {isEditForm && <PostInput />}
      </div>
    </main>
  );
};

export default SinglePost;