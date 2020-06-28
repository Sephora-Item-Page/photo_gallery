import React from 'react';
import App from '../components/App.jsx';

import { mount, shallow, render } from 'enzyme';

test('Is the App component being set up properly?', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});