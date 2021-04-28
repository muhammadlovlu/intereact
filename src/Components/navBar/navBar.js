import React from 'react';
import logo from './intereact-logo.png';
import './navBar.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const navBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand><img src={logo} alt="logo" className="img-height" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav " className="text-primary" >
          <Nav className="mr-auto bg-dark">
            <Nav.Link href="#home" className="text-white newColor">Home</Nav.Link>
            <Nav.Link href="#link" className="text-white newColor">Link</Nav.Link>
            <NavDropdown title="Cars" id="basic-nav-dropdown newColor">
              <NavDropdown.Item href="#action/3.1" className="text-light newColor">GMC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-light newColor">Cadillac</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="text-light newColor">Lamborghini</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="text-light newColor">Rolls Royce</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 text-dark newColor" />
            <Button variant="outline-success text-white bg-dark mr-auto">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
};

export default navBar;