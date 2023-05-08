import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './PostList.css'

const PostList = () => {
  const posts = useSelector(state => Object.values(state.posts.posts) || []);
  return (
    <main className='container'>
    <div>
      <h1>Post List</h1>
      <ul className='post-list'>
        {posts.map(({ id, title, text, url }) => (
          <li key={id}><NavLink to={`/posts/${id}`}> <h1>{title}</h1>
            <p>
              {text}
            </p>
            <img src={url} alt={title} /></NavLink></li>
        ))}
      </ul>
    </div>
    </main>
  );
};

export default PostList;