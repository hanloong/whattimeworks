import getCalendarState from './calendar'
import initialState from '../constants/state'
import moment from 'moment-timezone'

test('converts the state to calendar friedly format', () => {
  initialState.date = moment('2017-04-16T07:00:00-07:00')
  let calendar = getCalendarState(initialState)

  expect(calendar.length).toEqual(48)
  expect(calendar[0]).toEqual({
    times: [{
      time: "Mon, 12:00 AM",
      valid: false,
      zone: "Australia/Sydney"
    }],
    valid: false
  })
})
