import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import MainPhoto from './MainPhoto.jsx';
import Carousel from './Carousel.jsx';
import BackArrow from './BackArrow.jsx';
import ForwardArrow from './ForwardArrow.jsx';

const PhotoGallery = styled.div`
  outline: 1px dashed black;
  height: 412px;
  width: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ActivePhoto = styled.div`
  outline: 1px solid blue;
  display: flex:
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  height: 300px;
  width: 300px;
`;

const StaticText = styled.div`
  text-align: center;
  height: 12px;
  width: 300px;
  margin-top: 8px;
  margin-bottom: 24px;
  display: flex;
  position: relative;
  justify-content: center;
`;

const CarouselContainer = styled.div`
  outline: 1px dashed red;
  height: 68px;
  width: 300px;
  display: flex;
  position: relative;
  justify-content: center;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    //this.carouselRef = React.createRef();
    this.state = {
      photos: [],
      thumbnails: [],
      visiblePhotos: [],
      mainPhoto: '',
      currentPicIdx: 0,
      currentXCoord: 0,
      carouselLength: 0,
      moveForward: true,
      moveBack: true,
      modal: false
    };

    this.getItemPhotos = this.getItemPhotos.bind(this);
    this.changeMainPhoto = this.changeMainPhoto.bind(this);
    this.moveBackFunc = this.moveBackFunc.bind(this);
    this.moveForwardFunc= this.moveForwardFunc.bind(this);

  }

  getItemPhotos() {
    axios.get('/items/312')
      .then((response) => {
        var photoHRArr = response.data[0].highRes;
        var photoLRArr = response.data[0].lowRes;
        this.setState({
          photos: photoHRArr,
          thumbnails: photoLRArr,
          mainPhoto: photoHRArr[0],
          carouselLength: photoHRArr.length
        })
      })
      .catch((error) => {
        console.log('Failed axios.get Client-Side: ', error);
      })
  }

  changeMainPhoto(event) {
    this.setState({
      mainPhoto: event.target.src
    });
  }

  moveBackFunc() {
    //var xCoord = (this.state.currentXCoord)
    console.log('move it back now yall');
  }

  moveForwardFunc() {
    console.log('moving it forward now yall');
  }

  componentDidMount() {
    this.getItemPhotos();
  }


  render() {
    return (
      <div>
        <div>
          <h1>Hello from React</h1>
          <PhotoGallery>
            <ActivePhoto>
              <MainPhoto mainPhoto={this.state.mainPhoto} />
            </ActivePhoto>
            <StaticText>Roll over or click image to zoom in</StaticText>
            <CarouselContainer>

              <BackArrow
                moveBack={this.state.moveBack}
                moveBackFunc={this.moveBackFunc}
              />

              <Carousel
                photos={this.state.thumbnails}
                mainPhoto={this.state.mainPhoto}
                changeMainPhoto={this.changeMainPhoto}
              // ref={this.carouselRef}
              />

              <ForwardArrow
                moveForward={this.state.moveForward}
                moveForwardFunc={this.moveForwardFunc}
              />

            </CarouselContainer>
          </PhotoGallery>
        </div>
      </div>
    )
  }
}

export default App;