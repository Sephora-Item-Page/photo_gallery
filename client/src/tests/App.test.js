import React from 'react';
import { mount, shallow, render } from 'enzyme';

import App from '../components/App.jsx';
import Carousel from '../components/Carousel.jsx'
import MainPhoto from '../components/MainPhoto.jsx';
import BackArrow from '../components/BackArrow.jsx';
import ForwardArrow from '../components/ForwardArrow.jsx';

describe('the App component!', () => {
  it('Should render the MainPhoto, the Carousel, and both arrow components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<MainPhoto/>)).toBe(true);
    expect(wrapper.containsMatchingElement(<Carousel/>)).toBe(true);
    expect(wrapper.containsMatchingElement(<BackArrow/>)).toBe(true);
    expect(wrapper.containsMatchingElement(<ForwardArrow/>)).toBe(true);
  });
})