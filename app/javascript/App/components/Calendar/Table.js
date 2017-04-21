import React from "react";
import Row from "./Row";
import ZoneAutoComplete from "../ZoneAutoComplete";
import { TableHeaderColumn } from "material-ui/Table";

const style = {
  th: {
    minWidth: "250px"
  },
  table: {
    fontFamily: "Roboto, sans-serif"
  }
};

const Table = ({ actions, zones, calendar }) => {
  return (
    <table style={style.table}>
      <thead>
        <tr>
          {zones.map((zone, i) => (
            <TableHeaderColumn key={i}>
              <ZoneAutoComplete
                actions={actions}
                index={i}
                deletable={i > 0}
                value={zone}
              />
            </TableHeaderColumn>
          ))}
          <th style={style.th} key="new-zone">
            <ZoneAutoComplete actions={actions} deletable={false} />
          </th>
        </tr>
      </thead>
      <tbody>
        {calendar.map((row, i) => <Row key={i} row={row} />)}
      </tbody>
    </table>
  );
};

export default Table;
