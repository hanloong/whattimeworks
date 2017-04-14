import * as types from '../constants/ActionTypes'
import * as actions from './index'

test('creates update zones actions', () => {
  let zones = ['US/Springfield']

  expect(actions.updateZones(zones)).toEqual({
    type: types.UPDATE_ZONES,
    zones: zones
  })
})

test('toggle matchOnly', () => {
  expect(actions.toggleMatchesOnly()).toEqual({
    type: types.TOGGLE_MATCHES_ONLY,
  })
})
