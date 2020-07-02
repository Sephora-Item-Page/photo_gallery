import React from 'react';
import styled from 'styled-components';

import Header from './ModalHeader.jsx';
import ModalBackArrow from './ModalBackArrow.jsx';
import ModalCarousel from './ModalCarousel.jsx';
import ModalForwardArrow from './ModalForwardArrow.jsx';
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
  margin: 40px auto auto auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  `;

const Thumbnails = styled.div`
  border-top: ${(props) => `${(props.border.border)}`};
  height: 53px;
  width: 852px;
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 25px;
  display: flex;
  position: relative;
  `;

const border = {
  border: '1px solid rgba(0, 0, 0, 0.063);'
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos,
      thumbnails: this.props.thumbnails,
      slideNum: this.props.slideNum,
      tempSlideNum: this.props.slideNum,
      carouselLength: this.props.carouselLength,
      clickedId: this.props.clickedId,
      moveForward: true,
      moveBack: true
    };

    this.changeMainPhoto = this.changeMainPhoto.bind(this);
    this.handleOnHover = this.handleOnHover.bind(this);
    this.handleOffHover = this.handleOffHover.bind(this);
    this.moveBackFunc = this.moveBackFunc.bind(this);
    this.moveForwardFunc= this.moveForwardFunc.bind(this);
  }

  changeMainPhoto(event) {
    var id = parseInt(event.target.id);
    this.setState({
      clickedId: id,
      slideNum: id
    });
  }

  handleOnHover(event) {
    this.setState({
      tempSlideNum: event.target.id
    });
  }

  handleOffHover() {
    var defaultSlideNum = this.state.clickedId;
    this.setState({
      tempSlideNum: this.state.slideNum
    });
  }

  moveBackFunc() {
    if (this.state.slideNum > 0) {
      var newSlideNum = this.state.slideNum - 1;
      var newClickedId = this.state.clickedId - 1;
      this.setState({
        slideNum: newSlideNum,
        clickedId: newClickedId,
        tempSlideNum: newSlideNum
      });
    }
  }

  moveForwardFunc() {
    var slideMax = this.state.carouselLength;
    if (this.state.slideNum < slideMax - 1) {
      var newSlideNum = this.state.slideNum + 1;
      var newClickedId = this.state.clickedId + 1;
      this.setState({
        slideNum: newSlideNum,
        clickedId: newClickedId,
        tempSlideNum: newSlideNum
      });
    }
  }

  render() {
  return (
      <Wrapper>
        <Container>
          <Header
            itemTitle={this.props.itemTitle}
            toggleModal={this.props.toggleModal}
          />
          <ModalBackArrow slideNum={this.state.slideNum} moveBackFunc={this.moveBackFunc}/>
          <ModalCarousel
            photos={this.state.photos}
            slideNum={this.state.slideNum}
            tempSlideNum={this.state.tempSlideNum}
          />
          <ModalForwardArrow slideNum={this.state.slideNum} moveForwardFunc={this.moveForwardFunc} slideMax={this.state.carouselLength - 1}/>
          <Thumbnails border={border}>
            <ModalThumbnails
              thumbnails={this.state.thumbnails}
              handleOnHover={this.handleOnHover}
              handleOffHover={this.handleOffHover}
              changeMainPhoto={this.changeMainPhoto}
              clickedId={this.state.clickedId}
            />
          </Thumbnails>
        </Container>
      </Wrapper>
    )
  }
}

export default Modal;