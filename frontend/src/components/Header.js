import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { USER_LOGIN_RESET } from '../constants/userConstants'

const Header = (history) => {

  const dispatch = useDispatch()

  const userInfo = useSelector(state => state.userInfo)
  const { loading: userLoading, success: userSuccess, user } = userInfo

  const logOutHandler = () => {
    dispatch({
      type: USER_LOGIN_RESET
    })
    history.push('/')
  }

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
      <NavDropdown title={!userSuccess ? <Nav.Link eventKey={2} href='/login'>Login</Nav.Link> : <h6>Hello, {user.firstName}</h6>} id="user-info-dropdown">
        {!userSuccess ? <NavDropdown.Item href='/login'>Log In</NavDropdown.Item> : <NavDropdown.Item onClick={logOutHandler}>Logout</NavDropdown.Item>}
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Header
