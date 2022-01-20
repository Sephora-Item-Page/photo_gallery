/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable quotes */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-right: 8px;
  padding-left: 8px;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 9px;
  padding: 1px;
  display: flex;
  position: relative;
  align-items: center;
  object-fit: contain;
  z-index: 1;
  border: ${(props) => (props.id === props.clickedId ? `3px solid black` : `3px solid white`)};
  &:hover {
    border: ${(props) => (props.id === props.clickedId ? `3px solid black` : `3px solid lightgray`)}
  };
  `;

const CarouselPhoto = (props) => (
  <Wrapper>
    <Image
      src={props.photo}
      id={props.id}
      onClick={props.changeMainPhoto}
      onMouseOver={props.handleOnHover}
      onMouseLeave={props.handleOffHover}
      clickedId={props.clickedId}
    />
  </Wrapper>
);

export default CarouselPhoto;
