import React, { Component } from "react";
import AutoComplete from "material-ui/AutoComplete";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import IconButton from "material-ui/IconButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import { List, ListItem } from "material-ui/List";
import Dialog from "material-ui/Dialog";
import moment from "moment-timezone";
import { niceZone } from "../utils/formatter";

const style = {
  iconButton: {
    minWidth: "none",
    padding: "0 1em"
  }
};

class ZoneAutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
    return moment.tz
      .names()
      .map((zone, i) => (
        <ListItem
          key={i}
          onClick={e => this.handleUpdate(e, zone)}
          primaryText={niceZone(zone)}
        />
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

    const actions = [
      <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose} />
    ];

    return (
      <div>
        <FlatButton onTouchTap={this.handleOpen} label={zoneLabel} />
        {this.deleteButton()}
        <Dialog
          actions={actions}
          autoScrollBodyContent={true}
          onRequestClose={this.handleClose}
          open={this.state.open}
          modal={false}
          title="Select timezone from list"
        >
          <List disableKeyboardFocus={true}>
            {this.zonesList()}
          </List>
        </Dialog>
      </div>
    );
  }
}

export default ZoneAutoComplete;
