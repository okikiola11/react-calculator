import React from "react";
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';

import renderer from "react-test-renderer";

import DisplayCalculator from "../DisplayCalculator";

describe("Display Calculator", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DisplayCalculator />, div);
  });

  it("renders display calculator component correctly", () => {
    render(<DisplayCalculator result="9"></DisplayCalculator>)
  })

  it("matches snapshot", () => {
    const tree = renderer.create(<DisplayCalculator result="9"></DisplayCalculator>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
