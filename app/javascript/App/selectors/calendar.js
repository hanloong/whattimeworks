import moment from 'moment-timezone'

const getCalendarState = (state) => {
  let { zones, step, date } = state
  let steps = (24 * 60) / step
  let defaultZone = zones[0]

  return [...Array(steps).keys()].map(i =>
    zones.map(zone => {
      let time = date.clone().tz(zone).add((i * step), 'm')
      return {
        zone: zone,
        time: time.format("ddd, h:mm A"),
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
  let minutes = dateToMinutes(time)
  let startMinutes = dateToMinutes(moment(startTime))
  let endMinutes = dateToMinutes(moment(endTime))

  return validDays.includes(time.isoWeekday())
    && minutes >= startMinutes
    && minutes < endMinutes
}

const dateToMinutes = (date) => {
  return (date.hours() * 60) + date.minutes()
}

module.exports = getCalendarState
