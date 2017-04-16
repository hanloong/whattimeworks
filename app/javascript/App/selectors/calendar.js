import moment from 'moment-timezone'

const getCalendarState = (state) => {
  let { zones, step, date } = state
  let steps = (24 * 60) / step

  return [...Array(steps).keys()].map(i =>
    zones.map(zone => {
      let time = date.clone().add((i * step), 'm').tz(zone)
      return {
        zone: zone,
        time: time.calendar(date),
        valid: isValidTime(state, time)
      }
    })
  ).map(times => (
    {
      times: times,
      valid: times.every(time => time.valid)
    }
  )).filter(times => state.matchesOnly ? times.valid : true)
}

const isValidTime = (state, time) => {
  let { validDays, startTime, endTime } = state
  let minutes = (time.hour() * 60) + time.minute()

  return validDays.includes(time.isoWeekday())
    && minutes >= startTime
    && minutes < endTime
}

module.exports = getCalendarState
