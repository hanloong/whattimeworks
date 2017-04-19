import React from "react";
import { render } from "react-dom";
import { Root } from "./components/Root";
import { configureStore } from "./stores/configureStore";

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  render(<Root store={store} />, document.getElementById("app"));
});
