import getCalendarState from './calendar'
import initialState from '../constants/state'

test('converts the state to calendar friedly format', () => {
  let calendar = getCalendarState(initialState)

  expect(calendar.length).toEqual(48)
  expect(calendar[0]).toEqual({
    times: [{
      time: "Today at 12:00 AM",
      valid: false,
      zone: "Australia/Sydney"
    }],
    valid: false
  })
})
