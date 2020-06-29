import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  border-bottom: ${(props) => `${(props.border.border)}`};
  height: 20px;
  width: 916px;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
`;

const HeaderText = styled.div`
  height: 20px;
  width: 848px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  z-index: 1;
  font-family: 'helvetica neue', 'helvetica', 'arial', sans-serif;
  font-weight: bold;
`;

const Close = styled.button`
  height: 50px;
  width: 50px;
  cursor: pointer;
  display: flex;

  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`;

const Svg = styled.svg`
  height: 18px;
  width: 18px;
`;

const border = {
  border: '1px solid rgba(0, 0, 0, 0.063);'
}

const ModalHeader = (props) => (
  <Header border={border}>
    <HeaderText>{props.itemTitle}</HeaderText>
    <Close onClick={() => props.toggleModal()}>
      <Svg transform="rotate(45)">
        <svg viewBox="0 0 17 17" aria-hidden="true" className="css-1xg1q2j " data-comp="IconCross Icon Box "><path d="M17 7.5H9.5V0h-2v7.5H0v2h7.5V17h2V9.5H17"></path></svg>
      </Svg>
    </Close>
  </Header>
)

export default ModalHeader;
