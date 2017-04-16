import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Calendar from '../components/Calendar'
import Header from '../components/Header'
import Settings from '../components/Settings'
import getCalendarState from '../selectors/calendar'
import * as ZoneActions from '../actions'
import * as colors from 'material-ui/styles/colors'
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom'

const style = {
  app: {
    background: colors.grey200
  }
}

const App = ({zones, calendar, state,  actions}) => (
  <Router>
    <div style={ style.app }>
      <Header date={ state.date } />
      <Route exact path='/' render={() => (
        <Calendar
          actions={ actions }
          zones={ state.zones }
          calendar={ calendar } />
      )}/>
      <Route path='/settings' render={() => (
        <Settings
          state={ state }
          actions={ actions } />
      )}/>
    </div>
  </Router>
)

const mapStateToProps = ({ zones: state }) => ({
  state: state,
  calendar: getCalendarState(state)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ZoneActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
