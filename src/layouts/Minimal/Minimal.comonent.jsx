import React from "react";
import PropTypes from "prop-types";

import { Header } from "./components";

const Minimal = (props) => {
  const { children } = props;

  return (
   
        <main >{children}</main>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Minimal;
