import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"

export default function CusBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          Archive Azathoth
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/shell" className="text-white">
              Shell Backdoor
            </Nav.Link>
            <Nav.Link as={Link} to="/shell-helper" className="text-white">
              Shell Helper
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/shell-bypass" className="text-white">
              Shell Bypass
            </Nav.Link>
            <Nav.Link as={Link} to="/shell-modified" className="text-white">
              Shell Modified
            </Nav.Link>
            <Nav.Link as={Link} to="/file-manager" className="text-white">
              File Manager
            </Nav.Link>
            <Nav.Link as={Link} to="/priv-esc" className="text-white">
              Priv Esc
            </Nav.Link> */}
            <NavDropdown
              title={<span className="text-white">Other Link</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="https://azathoth.my.id">
                Blog
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="https://tools.azathoth.my.id">
                Tools
              </NavDropdown.Item>
              <NavDropdown.Item href="https://z-pedia.my.id">
                Shop
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
