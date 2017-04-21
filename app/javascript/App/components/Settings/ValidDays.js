import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Subheader from "material-ui/Subheader";
import ListItem from "../ListItem";

const days = [
  { value: 1, text: "Monday" },
  { value: 2, text: "Tuesday" },
  { value: 3, text: "Wednesday" },
  { value: 4, text: "Thursday" },
  { value: 5, text: "Friday" },
  { value: 6, text: "Saturday" },
  { value: 7, text: "Sunday" }
];

class ValidDays extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nullEvent, index, value) {
    this.props.onChange(value);
  }

  render() {
    let { value } = this.props;
    let menuItems = days.map(day => (
      <MenuItem
        checked={value.includes(day.value)}
        key={day.value}
        primaryText={day.text}
        value={day.value}
      />
    ));

    return (
      <div>
        <ListItem>
          <SelectField
            hintText="Select days"
            multiple={true}
            onChange={this.handleChange}
            value={value}
          >
            {menuItems}
          </SelectField>
        </ListItem>
      </div>
    );
  }
}

export default ValidDays;
