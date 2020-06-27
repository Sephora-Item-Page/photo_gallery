import React from 'react';
import styled from 'styled-components';

import CarouselPhoto from './CarouselPhoto.jsx';

const CarouselContainer = styled.div`
  height: 68px;
  width: 252px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  `;

  const CarouselTrack = styled.div`
  height: 68px;
  width: 252px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  transition: transform 300ms;
  transform: ${(props) => `translateX(${(-246 * props.pageNum)}px)`};
  `;


const Carousel = (props) => (
  <CarouselContainer >
    <CarouselTrack pageNum={props.pageNum}>
    {props.photos.map((photo, index) =>
      <CarouselPhoto
        photo={photo}
        mainPhoto={props.mainPhoto}
        id={index}
        tempMainPhoto={props.tempMainPhoto}
        mainPhotoEqualsThumbnail={props.mainPhoto === photo}
        changeMainPhoto={props.changeMainPhoto}
        handleOnHover={props.handleOnHover}
        handleOffHover={props.handleOffHover}
        clickedId={props.clickedId}
        key={photo}
      />
    )}
    </CarouselTrack>
  </CarouselContainer>

)

export default Carousel;