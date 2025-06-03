import { useSearchParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

const Sidebar = ({ genres }) => {
  const [searchParams] = useSearchParams();
  const selectedGenre = searchParams.get('genre') || '';

  return (
    <aside className='bg-gray-100 p-4 overflow-auto w-96 h-full'>
      <h2 className='text-xl font-semibold mb-4'>Genres</h2>
      <ul>
        {/* “All”—resets the filter */}
        <li className='mb-2'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              'block px-3 py-2 rounded ' +
              (!selectedGenre ? 'bg-blue-200 font-bold' : 'hover:bg-blue-100')
            }
          >
            All
          </NavLink>
        </li>

        {/* Map each genre into its own NavLink */}
        {genres.map((genre) => (
          <li key={genre.id} className='mb-2'>
            <NavLink
              to={`/?genre=${genre.genre}`}
              className={({ isActive }) =>
                'block px-3 py-2 rounded ' +
                (String(genre.id) === selectedGenre
                  ? 'bg-blue-200 font-bold'
                  : 'hover:bg-blue-100')
              }
            >
              {genre.genre}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
