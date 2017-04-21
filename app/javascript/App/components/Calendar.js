import React from "react";
import Table from "./Calendar/Table";

const style = {
  wrapper: {
    overflowX: "auto"
  }
};

const Calendar = ({ actions, calendar, zones }) => (
  <div style={style.wrapper}>
    <Table actions={actions} zones={zones} calendar={calendar} />
  </div>
);

export default Calendar;
