import React from 'react';
import logo from './intereact-logo.png';
import './navBar.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const navBar = () => {

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand><img src={logo} alt="logo" className="img-height" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"/>
        <Navbar.Collapse id="basic-navbar-nav " className="text-primary" >
          <Nav className="mr-auto bg-dark">
            <Nav.Link href="#home" className="text-white bgcolor fw-bold">Home</Nav.Link>
            <Nav.Link href="#link" className="text-white bgcolor">Link</Nav.Link>
            <NavDropdown title="Cars" id="basic-nav-dropdown bg-danger">
              <NavDropdown.Item  href="#action/3.1" className="text-white bgcolor">GMC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-white bgcolor">Cadillac</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="text-white bgcolor">Lamborghini</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4" className="text-white bgcolor">Rolls Royce</NavDropdown.Item>

             

            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 text-dark bgcolor" />
            <Button variant="outline-success text-white bg-dark mr-auto">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
};

export default navBar;