import { UPDATE_ZONES, TOGGLE_MATCHES_ONLY } from '../constants/ActionTypes'
import initialState from '../constants/state'

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ZONES:
      return { ...state, zones: action.zones }
    case TOGGLE_MATCHES_ONLY:
      return { ...state, matchesOnly: !state.matchesOnly }
    default:
      return state
  }
}
