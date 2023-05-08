import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import PostInput from './components/PostInput';
import './App.css';
import { getPosts } from './API/API';
import Home from './components/homePage';
import Header from './components/common/Header';
import SinglePost from './components/SinglePost';
function App() {
  const dispatch = useDispatch();
  const url = '/api/posts/'
  useEffect(() => {
    dispatch(getPosts(url));
  }, [dispatch]);
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Home} />
        <Route exact path="/posts" component={PostList} />
        <Route path='/create-form' component={PostInput} />
        <Route path="/posts/:id" component={SinglePost} />
      </Switch> 
    </div>
  );
}

export default App;
