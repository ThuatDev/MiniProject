import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="">THUAT DEV</Navbar.Brand> */}
        <NavLink to="/" className="navbar-brand">
          THUAT DEV
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/users" className="nav-link">
              Users
            </NavLink>
            <NavLink NavList to="/admins" className="nav-link">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <button>Log in</button>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
