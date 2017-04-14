import { UPDATE_ZONES } from '../constants/ActionTypes'
import moment from 'moment-timezone'

const initialState = {
  date: moment.tz("Australia/Sydney").startOf("day"),
  sourceZone: "Australia/Sydney",
  zones: [],
  step: 30,
  startTime: "9:00am",
  endTime: "5:00pm",
  validDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
}

export default function zones(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ZONES:
      return Object.assign(
        {},
        state,
        { zones: action.zones }
      )
    default:
      return state
  }
}
