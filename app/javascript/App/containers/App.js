import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Calendar } from '../components/Calendar/'
import { Header } from '../components/Header'
import getCalendarState from '../selectors/calendar'
import getZonesState from '../selectors/zones'
import * as ZoneActions from '../actions'

const App = ({zones, calendar,  actions}) => (
  <div className="container-fluid">
    <Header updateZones={ actions.updateZones }/>
    <Calendar
      zones={ zones }
      calendar={ calendar } />
  </div>
)

const mapStateToProps = state => ({
  calendar: getCalendarState(state.zones),
  zones: getZonesState(state.zones)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ZoneActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
