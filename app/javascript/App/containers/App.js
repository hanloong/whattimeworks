import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Calendar from '../components/Calendar/'
import Header from '../components/Header'
import * as ZoneActions from '../actions'

const App = ({state, actions}) => (
  <div className="container-fluid">
    <Header updateZones={ actions.updateZones }/>
    <Calendar
      step={ state.step }
      sourceZone={ state.sourceZone }
      zones={ state.zones } />
  </div>
)

const mapStateToProps = state => ({
  state: state.zones
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ZoneActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
