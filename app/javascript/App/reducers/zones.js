import {
  ADD_ZONE,
  DELETE_ZONE,
  TOGGLE_MATCHES_ONLY,
  UPDATE_ZONE,
  UPDATE_DATE
} from '../constants/ActionTypes'
import initialState from '../constants/state'
import moment from 'moment-timezone'

export default (state = initialState, action) => {
  let zones
  switch (action.type) {
    case ADD_ZONE:
      zones = [...state.zones, action.zone]
      return { ...state, zones: zones }
    case DELETE_ZONE:
      zones = state.zones.filter((_, index) => action.index !== index)
      return { ...state, zones: zones }
    case UPDATE_ZONE:
      zones = state.zones.map((zone, index) => {
        return action.index === index ? zone : action.zone
      })
      return { ...state, zones: zones }
    case UPDATE_DATE:
      let zone = state.zones[0]
      let date = moment(action.date).tz(zone).startOf('day')
      return { ...state, date: date }
    case TOGGLE_MATCHES_ONLY:
      return { ...state, matchesOnly: !state.matchesOnly }
    default:
      return state
  }
}
