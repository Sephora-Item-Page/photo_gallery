import React from 'react';
import styled from 'styled-components';

const Arrow = styled.button`
  height: 68px;
  min-width: 18px;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
  opacity: ${(props) => (props.pageMax !== props.pageNum ? `1` : `0.2`)};
  `;

const Svg = styled.svg`
  height: 36px;
  width: 18px;
  display: flex;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  justify-content: flex-end;
  align-items: center;
`;

const ForwardArrow = (props) => {
  var pageMax = Math.ceil(props.carouselLength / 3) - 1;
    return (
        <Arrow disabled={props.pageNum === pageMax} pageMax={pageMax} pageNum={props.pageNum} onClick={props.moveForwardFunc}>
          <Svg>
            <svg viewBox="0 0 16 32"><path d="M13.8 15.952L.3 30.28c-.1.1-.3.398-.3.697 0 .497.4.995.9.995.3 0 .5-.2.6-.3L15.6 16.75c.2-.298.4-.497.4-.796 0-.298-.1-.398-.2-.497l-.1-.1L1.5.33C1.4.23 1.2.032.9.032c-.5 0-.9.497-.9.995 0 .298.2.497.3.696l13.5 14.23z"></path></svg>
          </Svg>
        </Arrow>
    )
}

export default ForwardArrow;



