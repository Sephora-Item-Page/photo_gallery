import React from 'react';
import styled from 'styled-components';

import MainPhoto from './MainPhoto.jsx';

const CarouselContainer = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  position: relative
  flex-direction: row;
  justify-content: flex-start;
  align-items: relative;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  transition: transform 300ms;
  transform: ${(props) => `translateX(${(-300 * props.slideNum)}px)`};
  `;

const MainPhotoCarousel = (props) => (
  <CarouselContainer>
    <CarouselTrack slideNum={props.slideNum}>
      {props.photos.map(photo =>
        <MainPhoto
          photo={photo}
          mainPhoto={props.mainPhoto}
          tempMainPhoto={props.tempMainPhoto}
          key={photo}
        />
      )}
    </CarouselTrack>
  </CarouselContainer>
)

export default MainPhotoCarousel;