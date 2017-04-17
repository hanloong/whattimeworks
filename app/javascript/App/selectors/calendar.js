import moment from 'moment-timezone'

const getCalendarState = (state) => {
  let { zones, step, date } = state
  let steps = Math.floor((24 * 60) / step)
  let defaultZone = zones[0]

  return [...Array(steps).keys()].map(i =>
    zones.map(zone => {
      let startTime = date.clone().tz(zone).add((i * step), 'm')
      let endTime = startTime.clone().add(state.length, 'm')
      return {
        zone: zone,
        startTime: startTime.format("ddd, h:mm A"),
        endTime: endTime.format("h:mm A"),
        days: endTime.dayOfYear() - startTime.dayOfYear(),
        valid: isValidTime(state, startTime) && isValidTime(state, endTime)
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

  return validDays.includes(time.isoWeekday())
    && dateToMinutes(time) >= dateToMinutes(startTime)
    && dateToMinutes(time) <= dateToMinutes(endTime)
}

const dateToMinutes = (date) => {
  date = moment.isMoment(date) ? date : moment(date)
  return (date.hours() * 60) + date.minutes()
}

module.exports = getCalendarState
