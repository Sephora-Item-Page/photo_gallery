import React from 'react';
import styled from 'styled-components';

import ModalThumbnails from './ModalThumbnails.jsx';


const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;


const Container = styled.div`
  height: 722px;
  width: 916px;
  padding-right: 32px;
  padding-left: 32px;
  display: flex;
  background-color: white;
  margin: 7% auto;
  flex-direction: column;
  justify-content: flex-start;
  `;


const Header = styled.div`
  border-bottom: 1px solid lightgray;
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

const PhotoContainer = styled.div`
  height: 500px;
  width: 852px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
  margin-right: 32px;
  margin-left: 32px;
  margin-bottom: 30px;
  `;

const Photo = styled.img`
  height: 500px;
  width: 500px;
  position: relative;
  display: flex;
  justify-content: center;

`;

const Carousel = styled.div`
  height: 53px;
  width: 852px;
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 25px;
  display: flex;
  position: relative;
  `;



class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPhoto: this.props.mainPhoto,
      tempMainPhoto: this.props.tempMainPhoto
    };
  }




  render() {
  //   var photo;
  // if (this.state.tempMainPhoto !== '') {
  //   var photo = this.state.tempMainPhoto;
  // } else {
  //   var photo = this.state.mainPhoto;
  // }
  return (
      <Wrapper>
        <Container>
          <Header>
            <HeaderText>product title here</HeaderText>
            <Close onClick={() => this.props.toggleModal()}>
              <Svg transform="rotate(45)">
                <svg viewBox="0 0 17 17" aria-hidden="true" className="css-1xg1q2j " data-comp="IconCross Icon Box "><path d="M17 7.5H9.5V0h-2v7.5H0v2h7.5V17h2V9.5H17"></path></svg>
              </Svg>
            </Close>
          </Header>
          <PhotoContainer>
            <Photo src={this.props.mainPhoto} />
          </PhotoContainer>
            <Carousel>
              <ModalThumbnails
                photos={this.props.photos}
                // handleOnHover={this.props.handleOnHover}
                // handleOffHover={this.props.handleOffHover}
                changeMainPhoto={this.props.changeMainPhoto}
              />
            </Carousel>
        </Container>
      </Wrapper>
    )
  }
}

export default Modal;