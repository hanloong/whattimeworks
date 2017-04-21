import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import moment from "moment-timezone";
import DatePicker from "material-ui/DatePicker";
import Drawer from "material-ui/Drawer";
import Settings from "./Settings";

const style = {
  textField: {
    color: "white"
  }
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleDraw = this.toggleDraw.bind(this);
  }

  formatDate(date) {
    return moment(date).format("dddd, MMMM Do YYYY");
  }

  toggleDraw() {
    this.setState({
      drawOpen: !this.state.drawOpen
    });
  }

  handleChange(nullEvent, date) {
    let { actions } = this.props;
    actions.updateDate(date);
  }

  render() {
    const { date, state, actions } = this.props;

    let datePicker = (
      <DatePicker
        defaultDate={moment(date).toDate()}
        formatDate={this.formatDate}
        id="date-picker"
        inputStyle={style.textField}
        onChange={this.handleChange}
      />
    );

    return (
      <div>
        <AppBar onLeftIconButtonTouchTap={this.toggleDraw} title={datePicker} />
        <Drawer
          docked={false}
          onRequestChange={this.toggleDraw}
          open={this.state.drawOpen}
          width={300}
        >
          <Settings actions={actions} state={state} />
        </Drawer>
      </div>
    );
  }
}

export default Header;
