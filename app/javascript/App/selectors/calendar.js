import moment from "moment-timezone";

const getCalendarState = state => {
  const { zones, step, date } = state;
  const steps = Math.floor(24 * 60 / step);
  const offset = step * 2;
  const defaultZone = zones[0];

  return [...Array(steps).keys()]
    .map(i =>
      zones.map(zone => {
        const start = moment(date).clone().tz(zone).add(i * step, "m");
        const end = start.clone().add(state.length, "m");
        return {
          zone: zone,
          startTime: start.format("ddd, h:mm A"),
          endTime: end.format("h:mm A"),
          days: end.dayOfYear() - start.dayOfYear(),
          status: timeStatus(state, start, end, offset)
        };
      })
    )
    .map(times => ({
      times: times,
      valid: times.every(time => time.status === "VALID")
    }))
    .filter(times => (state.matchesOnly ? times.valid : true));
};

const timeStatus = (state, start, end, offset) => {
  if (validTime(state, start, end)) {
    return "VALID";
  } else if (almostTime(state, start, end, offset)) {
    return "ALMOST";
  } else {
    return "INVALID";
  }
};

const validTime = (state, start, end) => {
  return timeWithin(state, start) && timeWithin(state, end);
};

const almostTime = (state, start, end, offset) => {
  return timeWithin(state, start, offset) && timeWithin(state, end, 0, offset);
};

const timeWithin = (state, time, startOffset = 0, endOffset = 0) => {
  let { validDays, startTime, endTime } = state;

  return (
    validDays.includes(time.isoWeekday()) &&
    dateToMinutes(time) >= dateToMinutes(startTime) - startOffset &&
    dateToMinutes(time) <= dateToMinutes(endTime) + endOffset
  );
};

const dateToMinutes = date => {
  date = moment.isMoment(date) ? date : moment(date);
  return date.hours() * 60 + date.minutes();
};

module.exports = getCalendarState;
