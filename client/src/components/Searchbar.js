import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormControl from 'react-bootstrap/lib/FormControl'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class Searchbar extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  handleChange = (event) => {
    const { onChange } = this.props
    const value = event.target.value
    onChange(value)
  }

  render() {
    return (
      <div className='searchbar' style={{ textAlign: 'left' }}>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph='search' />
            </InputGroup.Addon>
            <FormControl type='text' onChange={this.handleChange} />
          </InputGroup>
        </FormGroup>
      </div>
    )
  }
}

export default Searchbar
