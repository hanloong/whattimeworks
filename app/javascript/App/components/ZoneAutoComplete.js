import React, { Component } from "react";
import AutoComplete from "material-ui/AutoComplete";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import IconButton from "material-ui/IconButton";
import moment from "moment-timezone";
import { niceZone } from "../utils/formatter";

const style = {
  icon: {
    height: "38px",
    paddingTop: "0px"
  },
  wrapper: {
    padding: "0 16px"
  }
};

class ZoneAutoComplete extends Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  zones() {
    return moment.tz
      .names()
      .map(zone => ({ value: zone, text: niceZone(zone) }));
  }

  render() {
    const { zone, deletable, index } = this.props;
    let deleteButton;

    if (deletable) {
      deleteButton = (
        <IconButton style={style.icon} onTouchTap={this.handleDelete}>
          <DeleteIcon />
        </IconButton>
      );
    }

    return (
      <div style={style.wrapper}>
        <AutoComplete
          dataSource={this.zones()}
          filter={AutoComplete.fuzzyFilter}
          fullWidth={true}
          hintText="Time zone e.g. (London)"
          id={`zone-auto-${index}`}
          onNewRequest={this.handleUpdate}
          openOnFocus={true}
          searchText={niceZone(this.props.value)}
        />
        {deleteButton}
      </div>
    );
  }
}

module.exports = ZoneAutoComplete;
