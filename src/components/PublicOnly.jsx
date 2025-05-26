import useStore from '../store';
import { Navigate } from 'react-router-dom';

const PublicOnly = ({ children }) => {
  const user = useStore((state) => state.user);

  if (user) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export default PublicOnly;
