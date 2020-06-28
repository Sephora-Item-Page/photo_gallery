import React from 'react';
import { mount, shallow, render } from 'enzyme';

import MainPhoto from '../components/MainPhoto.jsx';

describe('main photo component', () => {
  var dummyPhoto = {
    mainPhoto: "https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow1.jpg"
  }

  it('it exists', () => {
    const wrapper = shallow(<MainPhoto dummyPhoto={dummyPhoto} />);
    wrapper.setProps({dummyPhoto});
    expect(wrapper).toBeDefined();
  });
})




