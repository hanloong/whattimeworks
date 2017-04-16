import {
  UPDATE_ZONES,
  TOGGLE_MATCHES_ONLY,
  ADD_ZONE,
  DELETE_ZONE,
  UPDATE_ZONE
} from '../constants/ActionTypes'
import initialState from '../constants/state'

export default (state = initialState, action) => {
  let zones
  switch (action.type) {
    case UPDATE_ZONES:
      return { ...state, zones: action.zones }
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
    case TOGGLE_MATCHES_ONLY:
      return { ...state, matchesOnly: !state.matchesOnly }
    default:
      return state
  }
}
