import reducer from './zones'
import * as types from '../constants/ActionTypes'
import moment from 'moment-timezone'
import initialState from '../constants/state'

test('returns the default state', () => {
  const state = reducer(undefined, { type: 'NONE' })

  expect(state).toEqual(initialState)
})

test('updates zones', () => {
  const zones = ['US/Springfield']
  const state = reducer(undefined, {
    type: types.UPDATE_ZONES,
    zones: zones
  })

  expect(state.zones).toEqual(zones)
})
