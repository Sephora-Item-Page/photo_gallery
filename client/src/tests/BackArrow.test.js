import React from 'react';
import { mount, shallow, render } from 'enzyme';

import BackArrow from '../components/BackArrow.jsx';

describe('the back arrow component', () => {
  it('is cliiiiickable', () => {
    const wrapper = shallow(<BackArrow moveBack={true} />);
    wrapper.simulate('click');
  });
})