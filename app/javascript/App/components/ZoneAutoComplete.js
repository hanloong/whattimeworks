import React, { Component } from "react";
import AutoComplete from "material-ui/AutoComplete";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import IconButton from "material-ui/IconButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import debounce from "lodash/throttle";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Dialog from "./Dialog";
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
      zones: props.zones
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.updateFilter = debounce(() => {
      let searchText = document.getElementById("filterTextField").value;
      let zones = this.props.zones.filter(
        zone => zone.text.match(new RegExp(searchText, "i")) !== null
      );
      this.setState({ zones: zones });
    }, 250);
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

  handleChange(event) {
    this.updateFilter();
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
    return this.state.zones.map(zone => (
      <TableRow key={zone.id}>
        <TableRowColumn>
          <FlatButton
            label={zone.text}
            disableTouchRipple={true}
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
          disableTouchRipple={true}
          onTouchTap={this.handleDelete}
          style={style.iconButton}
          icon={<DeleteIcon />}
        />
      );
    }
  }

  dialogActions() {
    return [
      <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose} />
    ];
  }

  render() {
    const { value, zone, index } = this.props;
    let deleteButton, radios;
    const zoneLabel = value ? niceZone(this.props.value) : "Add timezone";

    return (
      <div>
        <FlatButton
          disableTouchRipple={true}
          onTouchTap={this.handleOpen}
          label={zoneLabel}
        />
        {this.deleteButton()}
        <Dialog
          actions={this.dialogActions()}
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
                    id="filterTextField"
                    defaultValue=""
                    onChange={this.handleChange}
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
