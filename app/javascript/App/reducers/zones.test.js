import reducer from './zones'
import * as types from '../constants/ActionTypes'
import moment from 'moment-timezone'

test('returns the default state', () => {
  const state = reducer(undefined, { type: 'NONE' })

  expect(state).toEqual({
    date: moment.tz("Australia/Sydney").startOf("day"),
    sourceZone: "Australia/Sydney",
    zones: [],
    step: 30,
    startTime: (9 * 60),
    endTime: (17 * 60),
    validDays: [1, 2, 3, 4, 5],
  })
})

test("updates zones", () => {
  const zones = ['US/Springfield']
  const state = reducer(undefined, {
    type: types.UPDATE_ZONES,
    zones: zones
  })

  expect(state.zones).toEqual(zones)
})
