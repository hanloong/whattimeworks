import moment from 'moment-timezone'

const getCalendarState = (state) => {
  let { sourceZone, zones, step, date } = state
  let steps = (24 * 60) / step

  return [...Array(steps).keys()].map(i =>
    [sourceZone, ...zones].map(zone => {
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
  ))
}

const isValidTime = (state, time) => {
  let { validDays, startTime, endTime } = state
  let minutes = (time.hour() * 60) + time.minute()

  return validDays.includes(time.isoWeekday())
    && minutes >= startTime
    && minutes <= endTime
}

module.exports = getCalendarState
