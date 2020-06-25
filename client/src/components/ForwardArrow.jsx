import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 68px;
  width: 32px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  outline: 1px solid red;
`;

const Arrow = styled.div`
  height: 36px;
  width; 18px;
  display: flex;
  justify-content: flex-start;
  align-items; center;
`;

const ForwardArrow = (props) => {
  if (props.moveForward === true) {
    return (
      <Container onClick={props.moveForwardFunc}>
        <Arrow>
        +
        </Arrow>
      </Container>
    )
  } else {
    return null;
  }
}

export default ForwardArrow;



