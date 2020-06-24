import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const ActiveImage = styled.img`
  height: 300px;
  width: 300px
  display: block;
  position: relative;
`;

const MainPhoto = (props) => {
  return (
    <Container>
      <ActiveImage src={props.mainPhoto} />
    </Container>
  )
}

export default MainPhoto;

