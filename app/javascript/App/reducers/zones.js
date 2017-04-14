import { UPDATE_ZONES } from '../constants/ActionTypes'
import moment from 'moment-timezone'

const initialState = {
  date: moment.tz("Australia/Sydney").startOf("day"),
  sourceZone: "Australia/Sydney",
  zones: [],
  step: 30,
  startTime: (9 * 60),
  endTime: (17 * 60),
  validDays: [1, 2, 3, 4, 5],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ZONES:
      return { ...state, zones: action.zones }
    default:
      return state
  }
}
