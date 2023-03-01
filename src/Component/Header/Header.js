import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <Navbar bg="white" expand="lg" className="p-0">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="https://chawkbazar-laravel-shop.vercel.app/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F258%2Flogo-final2x.png&w=96&q=75"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Demos"
                id="basic-nav-dropdown"
                className="nav-an"
              >
                <NavDropdown.Item href="#action/3.1">Modern</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Standard</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Minimal</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Vintage</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Classic</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Trendy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Elegant</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Refined</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fashion</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Mens Wear" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Women Wear" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Casual Wear" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Search</Nav.Link>
              <Nav.Link href="#link">Shops</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="nav-right">
            <button>Search</button>
            <button>Sign In</button>
            <button>Cart</button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
