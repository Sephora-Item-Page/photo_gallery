import React from 'react';
import styled from 'styled-components';

import ModalCarouselPhoto from './ModalCarouselPhoto.jsx';

const CarouselContainer = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: relative;
  overflow: hidden;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  `;

const PhotoTrack = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  transition: transform 300ms;
  transform: ${(props) => `translateX(${(-500 * props.slideNum)}px)`};
`;


const ModalCarousel = (props) => {
  var translateBy;
  props.slideNum === props.tempSlideNum ? translateBy = props.slideNum : translateBy = props.tempSlideNum;

  return (
    <CarouselContainer>
      <PhotoTrack slideNum={translateBy}>
        {props.photos.map((photo) =>
          <ModalCarouselPhoto
            photo={photo}
            key={photo}
          />
        )}
      </PhotoTrack>
    </CarouselContainer>
  )
}

export default ModalCarousel;