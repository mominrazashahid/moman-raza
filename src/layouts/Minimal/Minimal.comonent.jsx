import React from "react";
import PropTypes from "prop-types";

import { Header } from "./components";

const Minimal = (props) => {
  const { children } = props;

  return (
    <div className="main-bg">
      <Header />
      <div className="wrapper">
        <main className="w-100">{children}</main>
      </div>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Minimal;
