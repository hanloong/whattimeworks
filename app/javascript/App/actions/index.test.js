import * as types from "../constants/ActionTypes";
import * as actions from "./index";

test("toggle matchOnly", () => {
  expect(actions.toggleMatchesOnly()).toEqual({
    type: types.TOGGLE_MATCHES_ONLY
  });
});
