import React from 'react';
import PropTypes from 'prop-types';
import { Route as BaseRoute, Redirect } from 'react-router-dom';

import PrivateLayout from '../layouts/Private';

const Route = ({ isGuest, component: Component, ...otherProps }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (!isAuthenticated && !isGuest) {
    return <Redirect to="/login" />;
  }

  const Layout = isAuthenticated ? PrivateLayout : React.Fragment;

  return (
    <BaseRoute
      {...otherProps}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

Route.propTypes = {
  isGuest: PropTypes.bool,
  path: PropTypes.string.isRequired
};

Route.defaultProps = {
  isGuest: false
};

export default Route;
