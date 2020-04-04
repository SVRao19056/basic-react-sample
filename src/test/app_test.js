import React from "react";
import { shallow } from "enzyme";
import App from "../App/App";
//import { expect } from "jest"; //required for avoid linting errors

describe("Smoke tests for App", () => {
  it("Test App", () => {
    expect(shallow(<App />)).toBeTruthy();
  });
  it("Test return value", () => {
    expect(<App />).toMatchObject(<App />);
  });
});
