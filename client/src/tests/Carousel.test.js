import React from 'react';
import { mount, shallow, render } from 'enzyme';

import Carousel from '../components/Carousel.jsx'
import CarouselPhoto from '../components/CarouselPhoto.jsx';

describe('the Carousel component', () => {

  it('should render the CarouselPhoto components and the length should match the amount of photos', () => {
    const wrapper = shallow(<Carousel photos={['photoA', 'photoB', 'photoC']} />);
    expect(wrapper.containsMatchingElement(<CarouselPhoto/>)).toBe(true);
  });

  it('should render the correct number of carousel photos', () => {
    const wrapper = shallow(<Carousel photos={['photoA', 'photoB', 'photoC', 'photoD']} />);
    expect(wrapper.find(CarouselPhoto)).toHaveLength(4)
  });
})