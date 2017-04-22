import React, { Component } from "react";
import { TableRowColumn } from "material-ui/Table";
import * as colors from "material-ui/styles/colors";

const style = {
  valid: {
    backgroundColor: colors.teal100
  },
  almost: {
    backgroundColor: colors.teal50
  },
  invalid: {
    backgroundColor: colors.grey50,
    color: colors.grey400
  }
};

class Row extends Component {
  getDiffDays({ days }) {
    if (days === 0) {
      return "";
    }

    return days > 0 ? `(+${days})` : `(-${days})`;
  }

  cellStyle({ status }) {
    switch (status) {
      case "VALID":
        return style.valid;
      case "ALMOST":
        return style.almost;
      default:
        return style.invalid;
    }
  }

  render() {
    const { row } = this.props;
    const cells = row.times.map((time, i) => {
      return (
        <TableRowColumn key={i} style={this.cellStyle(time)}>
          <span style={time.past ? { textDecoration: "line-through" } : {}}>
            {time.startTime} - {time.endTime}
            {this.getDiffDays(time)}
          </span>
        </TableRowColumn>
      );
    });

    return (
      <tr>
        {cells}
        <TableRowColumn />
      </tr>
    );
  }
}

export default Row;
