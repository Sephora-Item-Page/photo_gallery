import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const ActiveImage = styled.img`
  max-height: 300px;
  max-width: 300px
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: auto;
  `;


const MainPhoto = (props) => {
  return (
    <Container>
      <ActiveImage src={props.mainPhoto} />
    </Container>
  )
}

export default MainPhoto;

