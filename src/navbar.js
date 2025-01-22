import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
     
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
          
            <Nav.Link href="https://www.youtube.com/@Shetkari_putra_2296">Youtube</Nav.Link>
            <Nav.Link href="https://www.instagram.com/shetkari_putra_2296/">instagram</Nav.Link>
            <Nav.Link href="/animation">Services</Nav.Link>
            <NavDropdown title="More" id="navbar-dropdown">
              <NavDropdown.Item href="#">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Item 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Item 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;