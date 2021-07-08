import React from "react";
import { Navbar } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const Header = (title) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">{title}</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
