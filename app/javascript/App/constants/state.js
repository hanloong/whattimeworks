import moment from 'moment-timezone'

export default {
  date: moment.tz('Australia/Sydney').startOf('day'),
  zones: ['Australia/Sydney'],
  step: 30,
  startTime: (9 * 60),
  endTime: (17 * 60),
  validDays: [1, 2, 3, 4, 5],
  matchesOnly: false
}
