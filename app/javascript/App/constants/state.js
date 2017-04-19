import moment from "moment-timezone";

export default {
  date: moment.tz("Australia/Sydney").startOf("day"),
  zones: ["Australia/Sydney"],
  step: 30,
  length: 30,
  startTime: new Date(0, 0, 0, 9, 0, 0, 0),
  endTime: new Date(0, 0, 0, 17, 0, 0, 0),
  validDays: [1, 2, 3, 4, 5],
  matchesOnly: false
};
