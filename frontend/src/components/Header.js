import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Tattoo Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      <Nav.Link href="#artist">Artists</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="/login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Header
