import React from 'react';
import { shallow } from 'enzyme';
import Greeter, { handlers } from './greeter.jsx';

describe('Mock specific module function', () => {
  it('Test greet should be called once', () => {
    handlers.greet = jest.fn();
    shallow(<Greeter name="Sony Arouje" />);
    expect(handlers.greet.mock.calls.length).toBe(1);
  });
});