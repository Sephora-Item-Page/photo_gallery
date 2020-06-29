import React from 'react';
import styled from 'styled-components';

const ActiveImage = styled.img`
  height: 100%;
  width: 100%;
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