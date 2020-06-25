import React from 'react';
import { mount, shallow, render } from 'enzyme';

import CarouselPhoto from '../components/CarouselPhoto.jsx';

describe('carousel photo component', () => {
  var dummyPhoto = {
    mainPhoto: "https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow1.jpg",
    mainPhotoEqualsThumbnail: true,
    changeMainPhoto: {function() {console.log('we are changed in the main')} },
    key: "https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow1.jpg"
  }

  it('is exists', () => {
    const wrapper = shallow(<CarouselPhoto dummyPhoto={dummyPhoto} />);
    wrapper.setProps({dummyPhoto});
    expect(wrapper).toBeDefined();
  });
})
