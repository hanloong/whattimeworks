import * as types from '../constants/ActionTypes'

export const updateZone = (zone, index) => ({ type: types.UPDATE_ZONE, zone: zone, index: index })
export const addZone = (zone) => ({ type: types.ADD_ZONE, zone: zone })
export const deleteZone = (index) => ({ type: types.DELETE_ZONE, index: index })
export const toggleMatchesOnly = () => ({ type: types.TOGGLE_MATCHES_ONLY })
export const updateDate = (date) => ({ type: types.UPDATE_DATE, date: date })
export const updateStartTime = (time) => ({ type: types.UPDATE_START_TIME, time: time })
export const updateEndTime = (time) => ({ type: types.UPDATE_END_TIME, time: time })
