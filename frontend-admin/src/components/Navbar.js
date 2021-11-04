import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                <NavDropdown.Item><Link className="text-decoration-none text-muted" to="/room_categories" >Room Category</Link></NavDropdown.Item>
                <NavDropdown.Item><Link className="text-decoration-none text-muted" to="/house_categories">House Category</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link className="text-decoration-none text-muted" to="/houses">House</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none text-muted" to="/rooms">Room</Link>
              </Nav.Link>
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
