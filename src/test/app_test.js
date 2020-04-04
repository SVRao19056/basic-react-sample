import React from "react";
import { shallow } from "enzyme";
import App from "../App/App";

describe("Smoke tests for App", () => {
  it("Test App", () => {
    expect(shallow(<App />)).toBeTruthy();
  });
  it("Test return value", () => {
    expect(<App />).toMatchObject(<App />);
  });
});
