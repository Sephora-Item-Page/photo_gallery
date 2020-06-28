import React from 'react';
import styled from 'styled-components';

import Header from './ModalHeader.jsx';
import ModalCarousel from './ModalCarousel.jsx';
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
    console.log('onhover: ', event.target.id);
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
    if (this.state.pageNum > 0) {
      var newPageNum = this.state.pageNum - 1;
      this.setState({
        pageNum: newPageNum,
      });
    }
  }

  moveForwardFunc() {
    var pageMax = Math.ceil(this.state.carouselLength / 3);
    if (this.state.pageNum < pageMax - 1) {
      var newPageNum = this.state.pageNum + 1;
      this.setState({
        pageNum: newPageNum,
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
          <ModalCarousel
            photos={this.state.photos}
            slideNum={this.state.slideNum}
            tempSlideNum={this.state.tempSlideNum}
          />
          <Carousel>
            <ModalThumbnails
              thumbnails={this.state.thumbnails}
              handleOnHover={this.handleOnHover}
              handleOffHover={this.handleOffHover}
              changeMainPhoto={this.changeMainPhoto}
              clickedId={this.state.clickedId}
            />
          </Carousel>
        </Container>
      </Wrapper>
    )
  }
}

export default Modal;