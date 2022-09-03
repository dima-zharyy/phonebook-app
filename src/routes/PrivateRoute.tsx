import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSignStatus } from 'redux/auth/authSlice';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children, redirectPath = '/sign-in' }) => {
  const isSignedIn = useSelector(getSignStatus);

  return isSignedIn ? children : <Navigate to={redirectPath} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectPath: PropTypes.string,
};
