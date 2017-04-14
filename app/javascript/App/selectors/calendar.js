import moment from 'moment-timezone'

const getCalendarState = ({ sourceZone, zones, step }) => {
  let steps = (24 * 60) / step

  return [...Array(steps).keys()].map(i =>
    [sourceZone, ...zones].map(zone => {
      return {
        zone: zone,
        time: moment.tz(sourceZone).startOf("day").add((i * step), "minutes").tz(zone).calendar(),
      }
    })
  )
}

module.exports = getCalendarState
