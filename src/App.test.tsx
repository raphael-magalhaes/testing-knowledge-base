import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  test("should render without crashing", () => {
    shallow(<App />);
  });
});
