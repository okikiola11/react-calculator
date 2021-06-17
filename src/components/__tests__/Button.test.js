import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../button/Button';

describe('Button Component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Button name="AC" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
