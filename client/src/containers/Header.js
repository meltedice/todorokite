import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import * as item from '../actions/item'

// TODO: Fix design...
class Header extends Component {
  handleAddEmptyItem = (event) => {
    const { addEmptyItem } = this.props.itemActions
    console.log('Header handleAddEmptyItem:')
    console.log(event)
    addEmptyItem()
  }

  render() {
    return (
      <Navbar inverse fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Todorokite</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={this.handleAddEmptyItem}>New</NavItem>
            <LinkContainer to='/'>
              <NavItem eventKey={2}>Dummy</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  itemActions: bindActionCreators(item, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
