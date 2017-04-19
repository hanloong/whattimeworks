import initialState from "../constants/state";
import moment from "moment-timezone";
import {
  ADD_ZONE,
  DELETE_ZONE,
  TOGGLE_MATCHES_ONLY,
  UPDATE_DATE,
  UPDATE_END_TIME,
  UPDATE_DAYS,
  UPDATE_LENGTH,
  UPDATE_START_TIME,
  UPDATE_STEP,
  UPDATE_ZONE
} from "../constants/ActionTypes";

export default (state = initialState, action) => {
  let zones;

  switch (action.type) {
    case ADD_ZONE:
      zones = [...state.zones, action.zone];
      return { ...state, zones: zones };
    case DELETE_ZONE:
      zones = state.zones.filter((_, index) => action.index !== index);
      return { ...state, zones: zones };
    case TOGGLE_MATCHES_ONLY:
      return { ...state, matchesOnly: !state.matchesOnly };
    case UPDATE_END_TIME:
      return { ...state, endTime: action.time };
    case UPDATE_DAYS:
      return { ...state, validDays: action.days };
    case UPDATE_DATE:
      let zone = state.zones[0];
      let date = moment(action.date).tz(zone).startOf("day");
      return { ...state, date: date };
    case UPDATE_LENGTH:
      return { ...state, length: action.mins };
    case UPDATE_STEP:
      return { ...state, step: action.mins };
    case UPDATE_START_TIME:
      return { ...state, startTime: action.time };
    case UPDATE_ZONE:
      zones = state.zones.map((zone, index) => {
        return action.index === index ? action.zone : zone;
      });
      return { ...state, zones: zones };
    default:
      return state;
  }
};
