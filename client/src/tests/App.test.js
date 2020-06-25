import React from 'react';
import { mount, shallow, render } from 'enzyme';
import axios from 'axios';


import App from '../components/App.jsx';
import Carousel from '../components/Carousel.jsx'
import MainPhoto from '../components/MainPhoto.jsx';
import BackArrow from '../components/BackArrow.jsx';
import ForwardArrow from '../components/ForwardArrow.jsx';

describe('the App component tests now commencing!', () => {
  it('Should render the MainPhoto, the Carousel, and both arrow components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<MainPhoto/>)).toBe(true);
    expect(wrapper.containsMatchingElement(<Carousel/>)).toBe(true);
    expect(wrapper.containsMatchingElement(<BackArrow/>)).toBe(true);
    expect(wrapper.containsMatchingElement(<ForwardArrow/>)).toBe(true);
  });

  jest.mock('axios', () => {
    const item = [
      {
        "lowRes": [
            "https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow1.jpg",
            "https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow2.jpg",
            "https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow3.jpg",
            "https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow4.jpg",
            "https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow5.jpg",
            "https://sephoraitems.s3-us-west-1.amazonaws.com/LowRes/Eyes/Eyeshadow6.jpg"
        ],
        "highRes": [
            "https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow1.jpg",
            "https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow2.jpg",
            "https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow3.jpg",
            "https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow4.jpg",
            "https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow5.jpg",
            "https://sephoraitems.s3-us-west-1.amazonaws.com/HighRes/Eyes/Eyeshadow6.jpg"
        ],
        "_id": 312,
        "itemName": "Fantastic Concrete Shirt",
        "type": "eyeshadow"
      }
    ]

    return {
      get: jest.fn(() => Promise.resolve(item))
    };
  })

  test('Are we doing the thing when the component mounts?', () => {
    const wrapper = shallow(<App />);
    const mock = jest.fn();
    wrapper.instance().getItemPhotos = mock;
    wrapper.instance().forceUpdate();
    wrapper
      .instance()
      .componentDidMount();
    expect(mock).toHaveBeenCalled();
  });

});