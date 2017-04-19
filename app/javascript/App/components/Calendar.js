import React from "react";
import Table from "./Calendar/Table";

const style = {
  wrapper: {
    overflowX: "auto"
  }
};

export default ({ actions, calendar, zones }) => (
  <div style={style.wrapper}>
    <Table actions={actions} zones={zones} calendar={calendar} />
  </div>
);
