import React from 'react';
import CarouselPhoto from './CarouselPhoto.jsx';
import styled from 'styled-components';


const CarouselContainer = styled.div`
  height: 68px;
  width: 252px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  `;


const Carousel = React.forwardRef((props, ref) => (
  <CarouselContainer >

    {props.photos.map(photo =>
      <CarouselPhoto
        photo={photo}
        mainPhoto={props.mainPhoto}
        mainPhotoEqualsThumbnail={props.mainPhoto === photo}
        changeMainPhoto={props.changeMainPhoto}
        key={photo}
      />
    )}

  </CarouselContainer>

))

export default Carousel;