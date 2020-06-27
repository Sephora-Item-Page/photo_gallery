import React from 'react';
import CarouselPhoto from './CarouselPhoto.jsx';
import styled from 'styled-components';


const CarouselContainer = styled.div`
  height: 53px;
  width: 852px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  `;


const ModalThumbnails = React.forwardRef((props, ref) => (
  <CarouselContainer ref={ref}>

    {props.photos.map(photo =>
      <CarouselPhoto
        photo={photo}
        mainPhoto={props.mainPhoto}
        mainPhotoEqualsThumbnail={props.mainPhoto === photo}
        changeMainPhoto={props.changeMainPhoto}
        handleOnHover={props.handleOnHover}
        handleOffHover={props.handleOffHover}
        key={photo}
      />
    )}

  </CarouselContainer>

))

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       photos: props.photos,
//       photoPos: 252,
//       size: 252
//     };

//   }
// }

export default ModalThumbnails;