import React, { Component } from 'react'
import { connect } from 'react-redux'
import Panel from 'react-bootstrap/lib/Panel'

class Items extends Component {
  render() {
    const { item } = this.props
    // FIXME: Display items on better design/layout
    const itemRows = item.items.map((item, index) => { return <span key={index} style={{ display: 'block' }}>{item.name}</span> })
    return (
      <div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Panel>
          {itemRows}
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.routing.location,
  item: state.item,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  // itemActions: bindActionCreators(item, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)
