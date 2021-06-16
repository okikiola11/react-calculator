import React from 'react';
import ReactDOM from "react-dom";
import TestUtils from "react-dom/test-utils";
import App from '../App';

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("failing test", () => {
    expect(false).toBeFalsy();
  })
});