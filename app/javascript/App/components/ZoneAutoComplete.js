import React, { Component } from "react";
import AutoComplete from "material-ui/AutoComplete";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import IconButton from "material-ui/IconButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Dialog from "material-ui/Dialog";
import moment from "moment-timezone";
import { niceZone } from "../utils/formatter";

const style = {
  iconButton: {
    minWidth: "none",
    padding: "0 1em"
  },
  filterInput: {
    width: "100%"
  },
  label: {
    textAlign: "left"
  }
};

class ZoneAutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      filter: ""
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  handleUpdate(event, newValue) {
    let { value, actions, index } = this.props;
    if (value) {
      actions.updateZone(newValue, index);
    } else {
      actions.addZone(newValue);
    }
    this.handleClose();
  }

  updateFilter(event) {
    this.setState({
      filter: event.target.value
    });
  }

  handleDelete() {
    let { actions, index } = this.props;
    actions.deleteZone(index);
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  zonesList() {
    return this.props.zones
      .filter(
        zone => zone.text.match(new RegExp(this.state.filter, "i")) !== null
      )
      .map(zone => (
        <TableRow
          key={zone.id}
          onTouchTap={e => this.handleUpdate(e, zone.value)}
        >
          <TableRowColumn>
            <FlatButton
              label={zone.text}
              primary={true}
              style={style.label}
              fullWidth
              onTouchTap={e => this.handleUpdate(e, zone.value)}
            />
          </TableRowColumn>
        </TableRow>
      ));
  }

  deleteButton() {
    if (this.props.deletable) {
      return (
        <FlatButton
          onTouchTap={this.handleDelete}
          style={style.iconButton}
          icon={<DeleteIcon />}
        />
      );
    }
  }

  render() {
    const { value, zone, index } = this.props;
    let deleteButton, radios;
    const zoneLabel = value ? niceZone(this.props.value) : "Add timezone";
    return (
      <div>
        <FlatButton onTouchTap={this.handleOpen} label={zoneLabel} />
        {this.deleteButton()}
        <Dialog
          autoScrollBodyContent={true}
          onRequestClose={this.handleClose}
          open={this.state.open}
          modal={false}
          title="Select timezone from list"
        >
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>
                  <TextField
                    style={style.filterInput}
                    value={this.state.filter}
                    onChange={this.updateFilter}
                    hintText="filter timezones"
                  />
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.zonesList()}
            </TableBody>
          </Table>
        </Dialog>
      </div>
    );
  }
}

ZoneAutoComplete.defaultProps = {
  zones: moment.tz
    .names()
    .map((zone, i) => ({ id: i, value: zone, text: niceZone(zone) }))
};

export default ZoneAutoComplete;
