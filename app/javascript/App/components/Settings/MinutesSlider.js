import React, { Component } from "react";
import Subheader from "material-ui/Subheader";
import ListItem from "../ListItem";
import Slider from "material-ui/Slider";

const style = {
  slider: {
    marginBottom: "12px",
    marginTop: "12px"
  }
};

class SettingsMinutesSlider extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.props.onChange(value);
  }

  title() {
    let { title, value } = this.props;

    if (value < 60) {
      return `${title}: ${value} minutes`;
    }

    let hours = Math.floor(value / 60.0);
    let minutes = value - hours * 60;
    let hourDescriptor = hours > 1 ? "hours" : "hour";

    if (minutes === 0) {
      return `${title}: ${hours} ${hourDescriptor}`;
    }

    return `${title}: ${hours} ${hourDescriptor} & ${minutes} minutes`;
  }

  render() {
    let { value, max, min, step } = this.props;
    return (
      <div>
        <Subheader>{this.title()}</Subheader>
        <ListItem>
          <Slider
            defaultValue={value}
            max={max}
            min={min}
            onChange={this.handleChange}
            sliderStyle={style.slider}
            step={step}
          />
        </ListItem>
      </div>
    );
  }
}

SettingsMinutesSlider.defaultProps = {
  max: 600,
  min: 15,
  step: 15
};

module.exports = SettingsMinutesSlider;
