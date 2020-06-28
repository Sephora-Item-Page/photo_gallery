import React from 'react';
import styled from 'styled-components';

import CarouselPhoto from './CarouselPhoto.jsx';

const CarouselContainer = styled.div`
  height: 53px;
  width: 852px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  `;


const ModalThumbnails = (props) => (
  <CarouselContainer>

    {props.thumbnails.map((photo, index) =>
      <CarouselPhoto
        photo={photo}
        id={index}
        mainPhoto={props.mainPhoto}
        mainPhotoEqualsThumbnail={props.mainPhoto === photo}
        changeMainPhoto={props.changeMainPhoto}
        handleOnHover={props.handleOnHover}
        handleOffHover={props.handleOffHover}
        clickedId={props.clickedId}
        key={photo}
      />
    )}

  </CarouselContainer>

)


export default ModalThumbnails;