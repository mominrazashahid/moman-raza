import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  if (localStorage.getItem("token")) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

PublicRouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default PublicRouteWithLayout;
