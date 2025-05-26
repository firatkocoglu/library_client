import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import PublicOnly from './components/PublicOnly';
import Login from './components/auth/Login';
import Books from './components/Books';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/login'
            element={
              <PublicOnly>
                <Login />
              </PublicOnly>
            }
          />
          <Route
            path='/logout'
            element={
              <PublicOnly>
                <Login />
              </PublicOnly>
            }
          />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Books />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
