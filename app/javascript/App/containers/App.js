import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Calendar from '../components/Calendar'
import Header from '../components/Header'
import Settings from '../components/Settings'
import getCalendarState from '../selectors/calendar'
import getZonesState from '../selectors/zones'
import * as ZoneActions from '../actions'
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom'

const App = ({zones, calendar, state,  actions}) => (
  <Router>
    <div>
      <Header date={ state.date } />
      <div className='container-fluid p-4'>
        <Route exact path='/' render={() => (
          <Calendar
            zones={ zones }
            calendar={ calendar } />
        )}/>
        <Route path='/settings' render={() => (
          <Settings
            state={ state }
            actions={ actions } />
        )}/>
      </div>
    </div>
  </Router>
)

const mapStateToProps = ({ zones: state }) => ({
  state: state,
  calendar: getCalendarState(state),
  zones: getZonesState(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ZoneActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
