import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import MainPhotoCarousel from './MainPhotoCarousel.jsx';
import Carousel from './Carousel.jsx';
import BackArrow from './BackArrow.jsx';
import ForwardArrow from './ForwardArrow.jsx';
import Modal from './Modal.jsx';

// outline: 1px dashed black;
const PhotoGallery = styled.div`
  height: 412px;
  width: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// outline: 1px solid blue;
const ActivePhoto = styled.div`
  display: flex:
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
`;

const StaticText = styled.div`
  text-align: center;
  height: 12px;
  width: 300px;
  margin-top: 8px;
  margin-bottom: 18px;
  display: flex;
  position: relative;
  justify-content: center;
  font-family: 'helvetica neue', 'helvetica', 'arial', sans-serif;
  font-size: 12px;
  font-stretch: 100%;
  font-weight: 400;
  z-index: -1;
`;

// outline: 1px dashed red;
const CarouselContainer = styled.div`
  height: 69px;
  width: 300px;
  display: flex;
  position: relative;
  justify-content: space-between;
`;


class PhotoGalleryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      thumbnails: [],
      mainPhoto: '',
      tempMainPhoto: '',
      itemTitle: '',
      pageNum: 0,
      slideNum: 0,
      carouselLength: 0,
      clickedId: 0,
      modalOpen: false,
    };

    this.getItemPhotos = this.getItemPhotos.bind(this);
    this.changeMainPhoto = this.changeMainPhoto.bind(this);
    this.handleOnHover = this.handleOnHover.bind(this);
    this.handleOffHover = this.handleOffHover.bind(this);
    this.moveBackFunc = this.moveBackFunc.bind(this);
    this.moveForwardFunc= this.moveForwardFunc.bind(this);
    this.openModal = this.openModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

  }


  getItemPhotos() {

    var productId = 0;
    var getProductId = () => {
      var typesArr = [100, 200, 300, 400, 500]
      var type = typesArr[Math.floor(Math.random() * 5)];
      var id = Math.floor(Math.random() * 20);
      var productId = (type + id);
      return productId;
    }
    var item = getProductId();

    axios.get(`/items/${item}`)
      .then((response) => {
        var photoHRArr = response.data[0].highRes;
        var photoLRArr = response.data[0].lowRes;
        this.setState({
          photos: photoHRArr,
          thumbnails: photoLRArr,
          mainPhoto: photoHRArr[0],
          itemTitle: response.data[0].itemName,
          carouselLength: photoHRArr.length,
        })
      })
      .catch((error) => {
        console.log('Failed axios.get Client-Side: ', error);
      })
  }

  changeMainPhoto(event) {
    var id = parseInt(event.target.id);
    this.setState({
      mainPhoto: event.target.src,
      clickedId: id
    });
  }

  handleOnHover(event) {
    this.setState({
      tempMainPhoto: event.target.src,
      slideNum: event.target.id
    });
  }

  handleOffHover() {
    var defaultSlide = this.state.clickedId;
    this.setState({
      tempMainPhoto: '',
      slideNum: defaultSlide
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

  openModal() {
    this.setState({modalOpen: true});
  }

  toggleModal() {
    const currModalState = this.state.modalOpen;
    this.setState({ modalOpen: !currModalState });
  }

  componentDidMount() {
    this.getItemPhotos();
  }


  render() {
    return (
      <div>
        <div>
          <PhotoGallery>
            <ActivePhoto>
              <MainPhotoCarousel
                photos={this.state.photos}
                mainPhoto={this.state.mainPhoto}
                tempMainPhoto={this.state.tempMainPhoto}
                slideNum={this.state.slideNum}
                openModal={this.openModal}
              />
            </ActivePhoto>
            <StaticText>Roll over or click image to zoom in</StaticText>
            <CarouselContainer>

              <BackArrow
                moveBackFunc={this.moveBackFunc}
                pageNum={this.state.pageNum}
              />

              <Carousel
                photos={this.state.thumbnails}
                mainPhoto={this.state.mainPhoto}
                tempMainPhoto={this.state.tempMainPhoto}
                pageNum={this.state.pageNum}
                slideNum={this.state.slideNum}
                handleOnHover={this.handleOnHover}
                handleOffHover={this.handleOffHover}
                changeMainPhoto={this.changeMainPhoto}
                clickedId={this.state.clickedId}
              />

              <ForwardArrow
                moveForwardFunc={this.moveForwardFunc}
                pageNum={this.state.pageNum}
                carouselLength={this.state.carouselLength}
              />

            </CarouselContainer>

            {this.state.modalOpen ? (
              <Modal
                photos={this.state.photos}
                thumbnails={this.state.thumbnails}
                mainPhoto={this.state.mainPhoto}
                tempMainPhoto={this.state.tempMainPhoto}
                itemTitle={this.state.itemTitle}
                slideNum={this.state.slideNum}
                carouselLength={this.state.carouselLength}
                clickedId={this.state.clickedId}
                moveForward={this.state.moveForward}
                moveBack={this.state.moveBack}
                handleOnHover={this.handleOnHover}
                handleOffHover={this.handleOffHover}
                changeMainPhoto={this.changeMainPhoto}
                toggleModal={this.toggleModal}
              />
            ) : null}
          </PhotoGallery>
        </div>
      </div>
    )
  }
}

export default PhotoGalleryApp;