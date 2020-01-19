import React from 'react';
import PropTypes from 'prop-types';
import { Route as BaseRoute, Redirect } from 'react-router-dom';

const Route = ({ isGuest, path, ...otherProps }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (isAuthenticated && isGuest) {
    return <Redirect to="/feed" />;
  }

  if (!isAuthenticated && !isGuest) {
    return <Redirect to="/login" />;
  }

  return <BaseRoute {...otherProps} />;
};

Route.propTypes = {
  isGuest: PropTypes.bool,
  path: PropTypes.string.isRequired
};

Route.defaultProps = {
  isGuest: false
};

export default Route;
