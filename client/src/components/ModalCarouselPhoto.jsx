import React from 'react';
import styled from 'styled-components';

const ActiveImage = styled.img`
  height: 500px;
  width: 500px;
  object-fit: cover;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center
`;

const ModalCarouselPhoto = (props) => {

  return (
    <ActiveImage src={props.photo}/>
  )
}

export default ModalCarouselPhoto;