import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import { Link } from 'react-router-dom'

import * as item from '../actions/item'

import './Header.sass'

class Header extends Component {
  static propTypes = {
    itemActions: PropTypes.object.isRequired,
  }

  handleAddEmptyItem = (event) => {
    const { addEmptyItem } = this.props.itemActions
    addEmptyItem()
  }

  render() {
    return (
      <Navbar inverse fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Todorokite</Link>
          </Navbar.Brand>

          <Nav className='navbar-right'>
            <NavDropdown eventKey={1} title='User' id='user-nav-dropdown'>
              <MenuItem eventKey={1.1} >Signout</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} onClick={this.handleAddEmptyItem} style={{ verticalAlign: 'top' }}>
              <Glyphicon glyph='plus-sign' style={{ color: 'white' }} /> New
            </NavItem>
          </Nav>
        </Navbar.Header>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  itemActions: bindActionCreators(item, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
