import {
  ADD_ZONE,
  DELETE_ZONE,
  TOGGLE_MATCHES_ONLY,
  UPDATE_DATE,
  UPDATE_END_TIME,
  UPDATE_DAYS,
  UPDATE_START_TIME,
  UPDATE_ZONE
} from '../constants/ActionTypes'
import initialState from '../constants/state'
import moment from 'moment-timezone'

export default (state = initialState, action) => {
  let zones
  switch (action.type) {
    case ADD_ZONE:
      zones = [...state.zones, action.zone]
      debugger
      return { ...state, zones: zones }
    case DELETE_ZONE:
      zones = state.zones.filter((_, index) => action.index !== index)
      return { ...state, zones: zones }
    case TOGGLE_MATCHES_ONLY:
      return { ...state, matchesOnly: !state.matchesOnly }
    case UPDATE_DATE:
      let zone = state.zones[0]
      let date = moment(action.date).tz(zone).startOf('day')
      return { ...state, date: date }
    case UPDATE_END_TIME:
      return { ...state, endTime: action.time }
    case UPDATE_DAYS:
      return { ...state, validDays: action.days }
    case UPDATE_START_TIME:
      return { ...state, startTime: action.time }
    case UPDATE_ZONE:
      zones = state.zones.map((zone, index) => {
        return action.index === index ? action.zone : zone
      })
      return { ...state, zones: zones }
    default:
      return state
  }
}
