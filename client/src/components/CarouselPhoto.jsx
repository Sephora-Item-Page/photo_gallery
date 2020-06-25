import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-right: 8px;
  padding-left: 8px;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  padding: 1px
  display: flex;
  position: relative;
  object-fit: contain;
  ${Wrapper}:hover & {
    outline: light slate gray solid 7px
  };
`;

//onClick={props.changeMain} ADD ONCLICK FUNCTIONALITY LATER
const CarouselPhoto = (props) => {
  return (
    <Wrapper>
      <Image
        src={props.photo}
        onClick={props.changeMainPhoto}
      />
    </Wrapper>
  )
}

export default CarouselPhoto;