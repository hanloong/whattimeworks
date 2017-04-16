import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Calendar from '../components/Calendar'
import Header from '../components/Header'
import Settings from '../components/Settings'
import getCalendarState from '../selectors/calendar'
import * as ZoneActions from '../actions'
import * as colors from 'material-ui/styles/colors'

const style = {
  app: {
    background: colors.grey200
  }
}

const App = ({zones, calendar, state,  actions}) => (
  <div style={ style.app }>
    <Header
      actions={ actions }
      state={ state }
      date={ state.date } />
    <Calendar
      actions={ actions }
      zones={ state.zones }
      calendar={ calendar } />
  </div>
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
