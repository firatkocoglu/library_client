import useStore from '../persistentStore';
import { Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
const Navbar = () => {
  const { user, setUser } = useStore((state) => state);

  const logoutUser = async () => {
    try {
      await axios.get('/auth/logout', {
        withCredentials: true,
      });
      setUser(null);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className='w-screen bg-white shadow-md px-8 py-4 flex items-center justify-between'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Library</h1>
        <ul className='flex space-x-4'>
          <li>
            <Link to='/' className='hover:text-gray-400'>
              Home
            </Link>
          </li>
          <li>
            {user ? (
              <Link
                to='/logout'
                className='hover:text-gray-400'
                onClick={logoutUser}
              >
                Logout
              </Link>
            ) : (
              <Link to='/login' className='hover:text-gray-400'>
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
