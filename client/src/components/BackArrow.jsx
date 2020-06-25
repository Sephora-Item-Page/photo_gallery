import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 68px;
  width: 32px;
  display: flex;
  position: relative;
  outline: 1px solid red;
`;

const Arrow = styled.div`
  height: 36px;
  width; 18px;
  display: flex;
  justify-content: flex-end;
  align-items; center;
`;

const fadedArrow = styled.div`
  height: 36px;
  width; 18px;
  opacity: 0.2;
  display: flex;
  justify-content: flex-end;
  align-items; center;
`;



const BackArrow = (props) => {
  if (props.moveBack === true) {
    return (
      <Container onClick={props.moveBackFunc}>
        <Arrow>
        -
        </Arrow>
      </Container>
    )
  } else {
    return (
      <Container onClick={props.moveBackFunc}>
        {/* <fadedArrow>
        -
        </fadedArrow> */}
      </Container>
    )
  }
}

export default BackArrow;