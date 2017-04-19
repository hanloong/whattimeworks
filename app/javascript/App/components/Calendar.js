import React from "react";
import Table from "./Calendar/Table";
import Paper from "material-ui/Paper";

const style = {
  paper: {
    display: "inline-block",
    margin: "1em"
  },
  wrapper: {
    overflowX: "auto"
  }
};

export default ({ actions, calendar, zones }) => (
  <div style={style.wrapper}>
    <Paper style={style.paper}>
      <Table actions={actions} zones={zones} calendar={calendar} />
    </Paper>
  </div>
);
