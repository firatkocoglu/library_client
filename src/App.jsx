import './App.css';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Outlet, useLoaderData } from 'react-router-dom';

export default function App() {
  const { genres } = useLoaderData();

  return (
    <div className='flex h-screen'>
      <main>
        <div className=' w-full'>
          <Navbar />
        </div>
        <div className='flex'>
          <Sidebar genres={genres} />
          <Outlet />
        </div>
      </main>
    </div>
  );
}
