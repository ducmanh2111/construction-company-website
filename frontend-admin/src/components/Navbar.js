import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';

export default function Navbars() {
  const signOut = () => {
    sessionStorage.clear();
    window.location.href = '/';
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo.jpg"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categories" id="categories">
                <NavDropdown.Item href="/room_categories">Room Category</NavDropdown.Item>
                <NavDropdown.Item href="/house_categories">House Category</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/houses">House</Nav.Link>
              <Nav.Link href="/rooms">Room</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="light" onClick={e => signOut()}>Sign out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
