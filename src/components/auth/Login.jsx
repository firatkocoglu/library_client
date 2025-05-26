import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store';

// Set the base URL for axios requests
axios.defaults.baseURL = 'http://localhost:3000';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const setUser = useStore((state) => state.setUser);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    setFormData({ email: '', password: '' });
    setError('');

    try {
      const response = await axios.post('/auth/login', formData, {
        withCredentials: true,
      });
      const { user } = response.data;
      setUser(user);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        <div>
          <label className='block text-sm font-medium mb-1'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>Password</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
