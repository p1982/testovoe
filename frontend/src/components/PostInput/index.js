import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../context/FormContext';
import { createPost, updatePost } from '../../API/API';
import './PostInput.css';
import { useHistory, useParams } from 'react-router-dom';

const PostInput = () => {
  const {id} = useParams()
  const {isEditForm, setIsEditForm} = useForm()
  const url = '/api/posts/'
  const dispatch = useDispatch();
  const post = useSelector(state=>state.posts.posts[id]) 
  const history = useHistory()
  const [title, setTitle] = useState(id?post.title:"");
  const [text, setText] = useState(id?post.text:"");
  const [errors, setErrors] = useState({})
 

  useEffect(()=>{
    const err = {}
    
    if(title.length<1){
      err.title = 'to short title'
    }
    if (title.length>50) {
      console.log(title.length);
      err.title = 'to long title'
      console.log(err);
    }
    if (text.length<1) {
      err.text = 'text is required'
    }
    if (text.length>250) {
      err.text = 'to long text'
    }
    setErrors(err)
  }, [title, text])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(errors.text || errors.title){
      return
    }
    const newPost = {
      title,
      text,
    };
    id?dispatch(updatePost({...post,...newPost}, `${url}${id}`)):dispatch(createPost(newPost, url))
    if(id){
      setIsEditForm(!isEditForm)
    }
    reset();
    history.push(id?`/posts/${id}`:'/')
  };

  const reset = () => {
    setTitle('');
    setText('');
  };

  return (
    <main className='container'>
    <div className='inputBox'>
      <h1>Create Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Title'
          name='title'
        />
        {errors.title && <span>{errors.title}</span>}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          name='text'
          placeholder='Add your post'
          rows='10'
        ></textarea>
        {errors.text && <span>{errors.text}</span>}
        <button 
          type='submit'
          disabled={!!errors.title || !!errors.text}
        >
          Submit
        </button>
      </form>
    </div>
    </main>
  );
};

export default PostInput;