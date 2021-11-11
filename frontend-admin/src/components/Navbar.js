import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
                  <NavDropdown.Item>
                    <Link className="text-decoration-none text-muted" to="/room_categories" >
                      Room Category
                    </Link>
                  </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-muted" to="/house_categories">
                    House Category
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="text-decoration-none text-muted my-2 mx-2" to="/houses">House</NavLink>
              <NavLink className="text-decoration-none text-muted my-2 mx-2" to="/rooms">Room</NavLink>
            </Nav>
            <Nav>
              <Button variant="success">
                <Link to={{pathname: `${process.env.REACT_APP_LANDING_PAGE}`}} target={"_blank"} className="text-decoration-none text-white">Landing page</Link>
              </Button>{' '}
              <Button variant="light" onClick={e => signOut()}>
                <FontAwesomeIcon icon={faSignOutAlt} aria-hidden="true"/>
                Sign out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
