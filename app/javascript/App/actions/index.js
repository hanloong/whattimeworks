import * as types from '../constants/ActionTypes'

export const updateZones = zones => ({ type: types.UPDATE_ZONES, zones })
export const toggleMatchesOnly = () => ({ type: types.TOGGLE_MATCHES_ONLY })
