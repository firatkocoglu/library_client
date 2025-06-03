import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appLoader, loginLoader, booksLoader } from './loaders.js';
import App from './App.jsx';
import Error from './components/Error.jsx';
import Login from './components/auth/Login.jsx';
import Books from './components/Books';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    loader: loginLoader,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    loader: appLoader,
    children: [
      {
        index: true,
        element: <Books />,
        errorElement: <Error />,
        loader: booksLoader,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
