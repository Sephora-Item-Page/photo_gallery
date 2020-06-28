import React from 'react';
import { mount, shallow, render } from 'enzyme';

import ForwardArrow from '../components/ForwardArrow.jsx';

describe('the forward arrow component', () => {
  it('is cliiiiickable', () => {
    const wrapper = shallow(<ForwardArrow moveForward={true} />);
    wrapper.simulate('click');
  });
})