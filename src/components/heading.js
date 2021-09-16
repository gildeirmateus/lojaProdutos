import React from "react";

import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, Container } from "reactstrap";

const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/home">Produtos</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="/addProducts" className="btn btn-primary ">
              Add Produto
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
