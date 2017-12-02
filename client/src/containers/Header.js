import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const Header = props => (
  <Navbar inverse fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Todorokite</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to='/'>
          <NavItem eventKey={1}>Dummy</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
