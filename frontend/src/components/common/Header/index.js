import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='container'>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to='/posts'>Posts</NavLink>
      <NavLink to='/create-form'>create post</NavLink>
    </header>
  );
};

export default Header;