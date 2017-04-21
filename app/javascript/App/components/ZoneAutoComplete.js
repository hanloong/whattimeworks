import React, { Component } from "react";
import AutoComplete from "material-ui/AutoComplete";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import IconButton from "material-ui/IconButton";
import FlatButton from "material-ui/FlatButton";
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

  handleUpdate(event) {
    let { value, actions, index } = this.props;
    if (value === "") {
      actions.addZone(event.value);
    } else {
      actions.updateZone(event.value, index);
    }
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

  zones() {
    return moment.tz
      .names()
      .map(zone => ({ value: zone, text: niceZone(zone) }));
  }

  render() {
    const { zone, deletable, index } = this.props;
    let deleteButton, radios;

    if (deletable) {
      deleteButton = (
        <FlatButton
          onTouchTap={this.handleDelete}
          style={style.iconButton}
          icon={<DeleteIcon />}
        />
      );
    }

    const actions = [
      <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose} />
    ];

    return (
      <div>
        <FlatButton
          onTouchTap={this.handleOpen}
          label={niceZone(this.props.value)}
        />
        {deleteButton}
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        />
      </div>
    );
  }
}

export default ZoneAutoComplete;
