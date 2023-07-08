import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
function NavbarComp() {
  return (
<Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="#home" id ='sharenet'>share.net</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ms-auto">
        <Nav.Link id='nvlk' href="https://github.com/mogulcoder26/share.NET">Github</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

function Header() {
  return (
    <div>
    <NavbarComp/>
    </div>
  )
}

export default Header
